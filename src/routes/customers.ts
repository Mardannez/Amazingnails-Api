import { Router } from "express";
import { z } from "zod";
import { prisma } from "../prisma";

const router = Router();

const createCustomerSchema = z.object({
  full_name: z.string().min(2),
  phone: z.string().optional(),
  email: z.string().email().optional(),
});

// Crear cliente
router.post("/", async (req, res) => {
  const parsed = createCustomerSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.flatten());

  const customer = await prisma.customer.create({
    data: parsed.data,
  });

  res.status(201).json(customer);
});

// (Opcional) buscar clientes por query
router.get("/", async (req, res) => {
  const q = String(req.query.query || "").trim();
  if (!q) {
    const last = await prisma.customer.findMany({
      orderBy: { created_at: "desc" },
      take: 20,
    });
    return res.json(last);
  }

  const customers = await prisma.customer.findMany({
    where: {
      OR: [
        { full_name: { contains: q, mode: "insensitive" } },
        { phone: { contains: q } },
        { email: { contains: q, mode: "insensitive" } },
      ],
    },
    orderBy: { created_at: "desc" },
    take: 20,
  });

  res.json(customers);
});

export default router;
