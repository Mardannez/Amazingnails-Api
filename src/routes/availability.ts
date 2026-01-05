import { Router } from "express";
import { z } from "zod";
import { DateTime } from "luxon";
import { prisma } from "../prisma";
import { booking_status } from "../generated/prisma"; // ✅ desde el client generado

const router = Router();

const querySchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  service_id: z.string().uuid(),
  staff_id: z.string().uuid().optional(),
  debug: z.coerce.boolean().optional(),
});

function overlapsMin(newStart: number, newDur: number, oldStart: number, oldDur: number) {
  const newEnd = newStart + newDur;
  const oldEnd = oldStart + oldDur;
  return newStart < oldEnd && newEnd > oldStart;
}

type HourSlot = {
  start_min: number;
  end_min: number;
  time_local: string;
  end_time_local: string;
  available: boolean;
};

router.get("/", async (req, res) => {
  const parsed = querySchema.safeParse(req.query);
  if (!parsed.success) return res.status(400).json(parsed.error.flatten());

  const { date, service_id, staff_id, debug } = parsed.data;

  const businessStartMin = 9 * 60;
  const businessEndMin = 18 * 60;
  const stepMin = 60;
  const tz = "America/Tegucigalpa";

  const service = await prisma.service.findUnique({ where: { id: service_id } });
  if (!service || !service.is_active) {
    return res.status(404).json({ error: "Servicio no válido" });
  }

  if (![60, 120].includes(service.duration_min)) {
    return res.status(400).json({
      error: "Solo se permiten servicios de 60 o 120 minutos.",
      duration_min: service.duration_min,
    });
  }

  const durationMin = service.duration_min;

  const staff = staff_id
    ? await prisma.staff.findUnique({ where: { id: staff_id } })
    : await prisma.staff.findFirst({ where: { is_active: true }, orderBy: { name: "asc" } });

  if (!staff || !staff.is_active) {
    return res.status(404).json({ error: "Staff no válido" });
  }

  // ✅ Date estable para @db.Date
  const bookingDate = new Date(`${date}T00:00:00.000Z`);

  const bookings = await prisma.booking2.findMany({
    where: {
      staff_id: staff.id,
      booking_date: bookingDate,
      status: { in: [booking_status.PENDING, booking_status.CONFIRMED] },
    },
    orderBy: { start_min: "asc" },
  });

  const lastStartMin = businessEndMin - durationMin;

  const hours: HourSlot[] = [];
  for (let startMin = businessStartMin; startMin <= lastStartMin; startMin += stepMin) {
    const endMin = startMin + durationMin;

    const blockedByBooking = bookings.some((b) =>
      overlapsMin(startMin, durationMin, b.start_min, b.duration_min)
    );

    const base = DateTime.fromISO(date, { zone: tz }).startOf("day");
    const time_local = base.plus({ minutes: startMin }).toFormat("HH:mm");
    const end_time_local = base.plus({ minutes: endMin }).toFormat("HH:mm");

    hours.push({
      start_min: startMin,
      end_min: endMin,
      time_local,
      end_time_local,
      available: !blockedByBooking,
    });
  }

  const response: any = {
    date,
    staff_id: staff.id,
    staff_name: staff.name,
    service_id,
    service_name: service.name,
    duration_min: durationMin,
    step_min: stepMin,
    business_hours: { start: "09:00", end: "18:00" },
    hours,
    available_slots: hours.filter((h) => h.available),
  };

  if (debug) {
    response.debug = {
      booking_date_used: bookingDate.toISOString().slice(0, 10),
      bookings_count: bookings.length,
      bookings: bookings.map((b) => ({
        id: b.id,
        booking_date: b.booking_date,
        start_min: b.start_min,
        duration_min: b.duration_min,
        status: b.status,
      })),
    };
  }

  return res.json(response);
});

export default router;
