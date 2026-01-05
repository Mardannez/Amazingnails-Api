import { Router } from "express";
import { prisma } from "../prisma";

const router = Router();

router.get("/", async (_req, res) => {
  const staff = await prisma.staff.findMany({
    where: { is_active: true },
    orderBy: { name: "asc" },
  });
  res.json(staff);
});

export default router;
