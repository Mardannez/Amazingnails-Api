// api/[...path].ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import app from "../src/app";

// (Opcional pero recomendado) deja que Express maneje el body
export const config = {
  api: { bodyParser: false },
};

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Si Vercel entrega /api/services, lo convertimos a /services
  if (typeof req.url === "string" && req.url.startsWith("/api/")) {
    req.url = req.url.replace(/^\/api/, "");
  }

  return app(req as any, res as any);
}

