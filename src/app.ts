// src/app.ts Este archivo se creo de ultimo, para publicar el Api en Resend.
import express from "express";
import cors from "cors";
import "dotenv/config";

import servicesRouter from "./routes/services";
import customersRouter from "./routes/customers";
import staffRouter from "./routes/staff";
import availabilityRouter from "./routes/availability";
import bookings2Router from "./routes/bookings2";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  // luego agregas tu dominio final:
  // "https://amazingnailshn.com",
   process.env.WEB_ORIGIN// "https://TU-FRONT.vercel.app",
].filter(Boolean) as string[];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

// ✅ Importante en Vercel: si entra como /api/xxx lo convertimos a /xxx
app.use((req, _res, next) => {
  if (req.url === "/api") req.url = "/";
  if (req.url.startsWith("/api/")) req.url = req.url.replace("/api", "");
  next();
});

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/services", servicesRouter);
app.use("/customers", customersRouter);
app.use("/staff", staffRouter);
app.use("/availability", availabilityRouter);
app.use("/bookings2", bookings2Router);

export default app;
