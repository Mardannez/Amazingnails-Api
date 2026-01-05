/*Codigo que se descomenta cuando se quiera correr local 

import express from "express";
import cors from "cors";
import "dotenv/config";
console.log("DATABASE_URL loaded?", !!process.env.DATABASE_URL);
import servicesRouter from "./routes/services";
import customersRouter from "./routes/customers";
import staffRouter from "./routes/staff";
import availabilityRouter from "./routes/availability";
import bookings2Router from "./routes/bookings2";
const app = express();

app.use(cors({
  origin: ["http://localhost:5173"], // luego agregas tu dominio Vercel
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/services", servicesRouter);
app.use("/customers", customersRouter);

app.use("/staff", staffRouter);
app.use("/availability", availabilityRouter);
app.use("/bookings2", bookings2Router);
console.log("DATABASE_URL loaded?", !!process.env.DATABASE_URL);
const port = Number(process.env.PORT || 3001);
app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`); //Solo para Local con Listen
});


*/
//Codigo para produccion en Vercel//
// src/server.ts
import app from "./app";
import "dotenv/config";

console.log("DATABASE_URL loaded?", !!process.env.DATABASE_URL);

const port = Number(process.env.PORT || 3001);
app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
