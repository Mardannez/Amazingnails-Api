import { Router } from "express";
import { prisma } from "../prisma";
import { booking_status } from "../generated/prisma";

const router = Router();

function minToHHmm(min: number) {
  const hh = String(Math.floor(min / 60)).padStart(2, "0");
  const mm = String(min % 60).padStart(2, "0");
  return `${hh}:${mm}`;
}

// GET /calendar/month?year=2026&month=1
router.get("/month", async (req, res) => {
  const year = Number(req.query.year);
  const month = Number(req.query.month); // 1-12

  if (!year || !month || month < 1 || month > 12) {
    return res.status(400).json({ error: "year y month son requeridos (month 1-12)" });
  }

  // Rango: [primer día del mes, primer día del siguiente mes)
  const start = new Date(Date.UTC(year, month - 1, 1));
  const end = new Date(Date.UTC(year, month, 1));

  const bookings = await prisma.booking2.findMany({
    where: {
      booking_date: { gte: start, lt: end },
      status: { in: [booking_status.CONFIRMED, booking_status.PENDING] },
    },
    orderBy: [{ booking_date: "asc" }, { start_min: "asc" }],
    include: {
      customer: true,
      service: true,
      staff: true,
    },
  });

  // Mapeo simple para el front
  const events = bookings.map((b) => {
    const dateISO = b.booking_date.toISOString().slice(0, 10); // YYYY-MM-DD
    const startHHmm = minToHHmm(b.start_min);
    const endHHmm = minToHHmm(b.start_min + b.duration_min);

    return {
      id: b.id,
      date: dateISO,
      start_min: b.start_min,
      duration_min: b.duration_min,
      startHHmm,
      endHHmm,
      status: b.status,
      notes: b.notes ?? "",
      customer: {
        id: b.customer.id,
        full_name: b.customer.full_name,
        phone: b.customer.phone ?? "",
        email: b.customer.email ?? "",
      },
      service: {
        id: b.service.id,
        name: b.service.name,
        price: b.service.price?.toString() ?? "",
        duration_min: b.service.duration_min,
      },
      staff: {
        id: b.staff.id,
        name: b.staff.name,
      },
    };
  });

  return res.json({ year, month, count: events.length, events });
});

export default router;
