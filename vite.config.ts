import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import type { IncomingMessage, ServerResponse } from "http";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function contactApiPlugin(): Plugin {
  return {
    name: "contact-api",
    configureServer(server: ViteDevServer) {
      server.middlewares.use(
        async (req: IncomingMessage, res: ServerResponse, next: () => void) => {
          if (req.url === "/api/contact" && req.method === "POST") {
            let body = "";
            req.on("data", (chunk: Buffer) => {
              body += chunk.toString();
            });
            req.on("end", async () => {
              try {
                const data = body ? JSON.parse(body) : {};
                const { name, email, message, honeypot } = data;
                if (honeypot) {
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify({ success: true }));
                  return;
                }
                if (
                  !name ||
                  name.trim().length < 2 ||
                  !email ||
                  !message ||
                  message.trim().length < 10
                ) {
                  res.statusCode = 400;
                  res.setHeader("Content-Type", "application/json");
                  res.end(
                    JSON.stringify({
                      success: false,
                      error: "Validation error",
                    }),
                  );
                  return;
                }

                const { EMAIL_USER, EMAIL_PASS, EMAIL_RECEIVER } = process.env;
                if (EMAIL_USER && EMAIL_PASS && EMAIL_RECEIVER) {
                  const transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: { user: EMAIL_USER, pass: EMAIL_PASS },
                  });
                  await transporter.sendMail({
                    from: `"TEKMEN REVOLUTION" <${EMAIL_USER}>`,
                    to: EMAIL_RECEIVER,
                    replyTo: email.trim(),
                    subject: "🚀 New Portfolio Project Request",
                    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
                  });
                } else {
                  console.log("📨 [Dev Contact API] Received submission:", {
                    name,
                    email,
                    message,
                  });
                }

                res.setHeader("Content-Type", "application/json");
                res.end(
                  JSON.stringify({
                    success: true,
                    message: "Message sent successfully!",
                  }),
                );
              } catch (err: unknown) {
                console.error("API error:", err);
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.end(
                  JSON.stringify({
                    success: false,
                    error: "Failed to send message.",
                  }),
                );
              }
            });
            return;
          }
          next();
        },
      );
    },
  };
}

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  plugins: [
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    contactApiPlugin(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
