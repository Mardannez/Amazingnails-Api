import { Router } from "express";
import { z } from "zod";
import { prisma } from "../prisma";
import { booking_status } from "../generated/prisma";
import { Resend } from "resend";

const router = Router();

const resend = new Resend(process.env.RESEND_API_KEY);

const bodySchema = z.object({
  service_id: z.string().uuid(),
  staff_id: z.string().uuid().optional(), // ✅ opcional (no front staff por ahora)
  booking_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // YYYY-MM-DD
  start_min: z.number().int().min(0).max(24 * 60 - 1),   // ej 600 = 10:00
  customer: z.object({
    full_name: z.string().min(3),
    phone: z.string().optional(),
    email: z.string().email().optional(),
  }),
  notes: z.string().optional(),
});

function overlapsMin(newStart: number, newDur: number, oldStart: number, oldDur: number) {
  const newEnd = newStart + newDur;
  const oldEnd = oldStart + oldDur;
  return newStart < oldEnd && newEnd > oldStart;
}

function minToHHmm(min: number) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function buildEmailHTML(params: {
  title: string;
  businessName: string;
  businessAddress: string;
  businessPhone: string;
  customerName: string;
  serviceName: string;
  description?: string | null;
  dateISO: string;
  startHHmm: string;
  endHHmm: string;
  priceText: string;
  notes?: string | null;
}) {
  const {
    title,
    businessName,
    businessAddress,
    businessPhone,
    customerName,
    serviceName,
    description,
    dateISO,
    startHHmm,
    endHHmm,
    priceText,
    notes,
  } = params;

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#f6f6f6;padding:24px;">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #eee;">
      <div style="padding:18px 20px;background:#111827;color:#fff;">
        <div style="font-size:16px;font-weight:700;">${businessName}</div>
        <div style="font-size:13px;opacity:.9;">${title}</div>
      </div>

      <div style="padding:20px;">
        <p style="margin:0 0 10px;font-size:14px;color:#111;">
          Hola <b>${customerName}</b>, aquí está el detalle:
        </p>

        <div style="border:1px solid #f0f0f0;border-radius:12px;padding:14px;background:#fff;">
          <div style="font-size:15px;font-weight:700;color:#111;margin-bottom:6px;">${serviceName}</div>
          ${
            description
              ? `<div style="font-size:13px;color:#555;margin-bottom:10px;line-height:1.4;">${description}</div>`
              : ""
          }

          <table style="width:100%;border-collapse:collapse;font-size:13px;color:#111;">
            <tr>
              <td style="padding:8px 0;color:#666;">Fecha</td>
              <td style="padding:8px 0;text-align:right;font-weight:700;">${dateISO}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#666;">Hora</td>
              <td style="padding:8px 0;text-align:right;font-weight:700;">${startHHmm} - ${endHHmm}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#666;">Total</td>
              <td style="padding:8px 0;text-align:right;font-weight:800;color:#e11d48;">${priceText}</td>
            </tr>
          </table>

          ${
            notes
              ? `<div style="margin-top:10px;padding-top:10px;border-top:1px dashed #eee;font-size:12px;color:#555;">
                   <b>Notas:</b> ${notes}
                 </div>`
              : ""
          }
        </div>

        <div style="margin-top:16px;padding:12px 14px;background:#fff7ed;border:1px solid #fed7aa;border-radius:12px;">
          <div style="font-size:12px;color:#7c2d12;"><b>Dirección:</b> ${businessAddress}</div>
          <div style="font-size:12px;color:#7c2d12;margin-top:6px;"><b>WhatsApp:</b> ${businessPhone}</div>
        </div>

        <p style="margin:16px 0 0;font-size:12px;color:#666;">
          Si necesitas cambiar la cita, escríbenos por WhatsApp.
        </p>
      </div>
    </div>
  </div>`;
}

router.post("/", async (req, res) => {
  const parsed = bodySchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.flatten());

  const { service_id, staff_id, booking_date, start_min, customer, notes } = parsed.data;

  // staff: si no viene, usa el primero activo
  const staff = staff_id
    ? await prisma.staff.findUnique({ where: { id: staff_id } })
    : await prisma.staff.findFirst({ where: { is_active: true }, orderBy: { name: "asc" } });

  if (!staff) return res.status(404).json({ error: "Staff no válido" });

  // service
  const service = await prisma.service.findUnique({ where: { id: service_id } });
  if (!service || !service.is_active) return res.status(404).json({ error: "Servicio no válido" });
  if (![60, 120].includes(service.duration_min)) return res.status(400).json({ error: "Solo 60/120" });

  const duration_min = service.duration_min;

  // regla negocio 09:00–18:00
  const businessStart = 9 * 60;
  const businessEnd = 18 * 60;
  if (start_min < businessStart || (start_min + duration_min) > businessEnd) {
    return res.status(400).json({ error: "Fuera de horario (09:00–18:00)" });
  }
  if (start_min % 60 !== 0) {
    return res.status(400).json({ error: "Solo horas exactas (ej 09:00, 10:00...)" });
  }

  // booking_date @db.Date
  const bookingDate = new Date(`${booking_date}T00:00:00.000Z`);

  // validar conflicto
  const existing = await prisma.booking2.findMany({
    where: {
      staff_id: staff.id,
      booking_date: bookingDate,
      status: { in: [booking_status.PENDING, booking_status.CONFIRMED] },
    },
  });

  const conflict = existing.some(b => overlapsMin(start_min, duration_min, b.start_min, b.duration_min));
  if (conflict) return res.status(409).json({ error: "Horario no disponible" });

  // customer: por email o phone, si no crea
  let dbCustomer = null as any;

  if (customer.email) dbCustomer = await prisma.customer.findFirst({ where: { email: customer.email } });
  if (!dbCustomer && customer.phone) dbCustomer = await prisma.customer.findFirst({ where: { phone: customer.phone } });

  if (!dbCustomer) {
    dbCustomer = await prisma.customer.create({
      data: { full_name: customer.full_name, phone: customer.phone, email: customer.email },
    });
  }

  // crear booking
  const booking = await prisma.booking2.create({
    data: {
      service_id,
      staff_id: staff.id,
      customer_id: dbCustomer.id,
      booking_date: bookingDate,
      start_min,
      duration_min,
      status: booking_status.CONFIRMED,
      notes,
    },
  });

  // ======= EMAILS (Resend) =======
  const from = process.env.RESEND_FROM || "";
  const staffNotifyEmail = process.env.STAFF_NOTIFY_EMAIL;
  const businessName = process.env.BUSINESS_NAME || "Amazing Nails";
  const businessAddress = process.env.BUSINESS_ADDRESS || "";
  const businessPhone = process.env.BUSINESS_PHONE || "";

  const startHHmm = minToHHmm(start_min);
  const endHHmm = minToHHmm(start_min + duration_min);

  // prisma devuelve Decimal como string (en JSON), aquí lo convertimos seguro:
  const priceText =
    service.price != null ? `L${String(service.price)}` : "Por confirmar";

  const emailResults: any = { customer: null, staff: null };

  // 1) correo a clienta (solo si dejó email)
  if (customer.email && from && process.env.RESEND_API_KEY) {
    try {
      const html = buildEmailHTML({
        title: "Confirmación de reserva",
        businessName,
        businessAddress,
        businessPhone,
        customerName: customer.full_name,
        serviceName: service.name,
        description: service.description,
        dateISO: booking_date,
        startHHmm,
        endHHmm,
        priceText,
        notes: notes || null,
      });

      const resp = await resend.emails.send({
        from,
        to: customer.email,
        subject: `✅ Reserva confirmada - ${service.name} (${booking_date} ${startHHmm})`,
        html,
      });

      emailResults.customer = { ok: true, id: (resp as any).data?.id || null };
    } catch (err: any) {
      emailResults.customer = { ok: false, error: err?.message || String(err) };
    }
  }

  // 2) correo a Bessy (fijo por env, por ahora)
  if (staffNotifyEmail && from && process.env.RESEND_API_KEY) {
    try {
      const html = buildEmailHTML({
        title: "Nueva reserva (notificación interna)",
        businessName,
        businessAddress,
        businessPhone,
        customerName: customer.full_name,
        serviceName: service.name,
        description: service.description,
        dateISO: booking_date,
        startHHmm,
        endHHmm,
        priceText,
        notes: notes || `Tel: ${customer.phone || "N/D"} | Email: ${customer.email || "N/D"}`,
      });
      console.log("staffNotifyEmail es:" + staffNotifyEmail)
      const resp = await resend.emails.send({
        from,
        to: staffNotifyEmail,
        subject: `📌 Nueva cita: ${service.name} - ${booking_date} ${startHHmm}`,
        html,
      });

      emailResults.staff = { ok: true, id: (resp as any).data?.id || null };
    } catch (err: any) {
      emailResults.staff = { ok: false, error: err?.message || String(err) };
    }
  }

  return res.status(201).json({
    ok: true,
    booking,
    email: emailResults, // 👈 para que veas si Resend respondió ok
  });
});

export default router;
