import { Router } from "express";
import { prisma } from "../prisma";
import { z } from "zod";

const router = Router();

// ✅ GET /services -> servicios activos (devuelve TODOS los campos del modelo)
router.get("/", async (_req, res) => {
  try {
    const services = await prisma.service.findMany({
      where: { is_active: true },
      orderBy: { created_at: "desc" },
      // 🔥 SIN select -> Prisma devuelve todos los campos, incluyendo description
    });

    return res.json(services);
  } catch (err) {
    console.error("GET /services error:", err);
    return res.status(500).json({ error: "Error al obtener servicios" });
  }
});

// ✅ POST /services -> crear servicio (description opcional para no bloquearte)
const createServiceSchema = z.object({
  name: z.string().min(2),
  duration_min: z.number().int().positive(),
  price: z.number().positive().optional(),
  is_active: z.boolean().optional(),
  description: z.string().optional(), // 👈 opcional (no te rompe pruebas)
});

router.post("/", async (req, res) => {
  const parsed = createServiceSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.flatten());

  const { name, duration_min, price, is_active, description } = parsed.data;

  try {
    const service = await prisma.service.create({
      data: {
        name,
        duration_min,
        price: price !== undefined ? price : undefined,
        is_active: is_active ?? true,
        description: description ?? null, // 👈 si no viene, null
      },
    });

    return res.status(201).json(service);
  } catch (err) {
    console.error("POST /services error:", err);
    return res.status(500).json({ error: "Error al crear servicio" });
  }
});

export default router;
