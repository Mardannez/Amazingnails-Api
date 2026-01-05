import type { VercelRequest, VercelResponse } from "@vercel/node";
import app from "../src/app";

// recomendado para Express (sin bodyParser de Vercel)
export const config = {
  api: { bodyParser: false },
};

export default function handler(req: VercelRequest, res: VercelResponse) {
  return app(req as any, res as any);
}
