// ═══════════════════════════════════════════════════════════════
//  TEKMEN REVOLUTION — Contact Form API Server
//  Express + Nodemailer + Gmail SMTP
// ═══════════════════════════════════════════════════════════════

import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT || 3001;

// ── Security Middleware ──────────────────────────────────────
app.use(helmet());
app.use(express.json({ limit: "10kb" })); // Limit body size for anti-spam

// ── CORS — Allow your frontend origin ────────────────────────
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  process.env.FRONTEND_URL, // e.g. "https://tekmen-revolution.vercel.app"
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl, Postman in dev)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["POST"],
    credentials: true,
  })
);

// ── Rate Limiting — Max 5 emails per IP per 15 minutes ───────
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: {
    success: false,
    error: "Too many requests. Please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// ── Nodemailer Transporter (Gmail SMTP) ──────────────────────
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify SMTP connection on startup
transporter.verify((error) => {
  if (error) {
    console.error("❌ SMTP connection failed:", error.message);
    console.error("   → Check EMAIL_USER and EMAIL_PASS in your .env file");
  } else {
    console.log("✅ SMTP connection ready — emails will be sent via Gmail");
  }
});

// ── Validation Helpers ───────────────────────────────────────
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateContactForm({ name, email, message }) {
  const errors = [];

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.push("Full name is required (minimum 2 characters).");
  }
  if (name && name.trim().length > 100) {
    errors.push("Full name must be under 100 characters.");
  }

  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    errors.push("A valid email address is required.");
  }

  if (!message || typeof message !== "string" || message.trim().length < 10) {
    errors.push("Project details are required (minimum 10 characters).");
  }
  if (message && message.trim().length > 5000) {
    errors.push("Project details must be under 5000 characters.");
  }

  return errors;
}

// ── Anti-Spam: Honeypot field detection ──────────────────────
function isSpam({ honeypot, name, message }) {
  // If honeypot field is filled, it's a bot
  if (honeypot) return true;

  // Basic content spam detection
  const spamPatterns = [
    /\b(viagra|casino|lottery|winner|click here|buy now)\b/i,
    /(http[s]?:\/\/){3,}/i, // Multiple URLs
  ];
  const combined = `${name} ${message}`;
  return spamPatterns.some((pattern) => pattern.test(combined));
}

// ── HTML Email Template ──────────────────────────────────────
function buildEmailHTML({ name, email, message, timestamp }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Portfolio Project Request</title>
</head>
<body style="margin:0;padding:0;background-color:#0B0F19;font-family:'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B0F19;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#6366F1 0%,#7C3AED 50%,#A78BFA 100%);padding:40px 36px;border-radius:24px 24px 0 0;text-align:center;">
              <h1 style="margin:0;font-size:28px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">
                🚀 New Project Request
              </h1>
              <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.8);font-weight:400;">
                TEKMEN REVOLUTION — Portfolio Contact Form
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#12162B;padding:36px;border-left:1px solid rgba(255,255,255,0.06);border-right:1px solid rgba(255,255,255,0.06);">

              <!-- Sender Info -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding:20px 24px;background:linear-gradient(135deg,rgba(99,102,241,0.12),rgba(124,58,237,0.08));border:1px solid rgba(99,102,241,0.2);border-radius:16px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <!-- Avatar Circle -->
                          <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#7C3AED,#6366F1);display:inline-block;text-align:center;line-height:48px;font-size:20px;font-weight:700;color:#fff;margin-bottom:12px;">
                            ${name.charAt(0).toUpperCase()}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top:8px;">
                          <p style="margin:0;font-size:18px;font-weight:700;color:#E0E0FF;">${escapeHtml(name)}</p>
                          <a href="mailto:${escapeHtml(email)}" style="font-size:14px;color:#818CF8;text-decoration:none;">${escapeHtml(email)}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Project Details -->
              <div style="margin-bottom:28px;">
                <p style="margin:0 0 10px;font-size:11px;font-weight:800;letter-spacing:2px;color:rgba(167,139,250,0.7);text-transform:uppercase;">
                  Project Details
                </p>
                <div style="padding:20px 24px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:16px;">
                  <p style="margin:0;font-size:15px;line-height:1.7;color:rgba(255,255,255,0.85);white-space:pre-wrap;">${escapeHtml(message)}</p>
                </div>
              </div>

              <!-- Timestamp -->
              <div style="padding:16px 20px;background:rgba(34,211,238,0.06);border:1px solid rgba(34,211,238,0.15);border-radius:12px;text-align:center;">
                <p style="margin:0;font-size:12px;color:rgba(34,211,238,0.8);font-weight:600;">
                  📅 Received: ${timestamp}
                </p>
              </div>

            </td>
          </tr>

          <!-- Reply CTA -->
          <tr>
            <td style="background-color:#0E1225;padding:28px 36px;text-align:center;border-left:1px solid rgba(255,255,255,0.06);border-right:1px solid rgba(255,255,255,0.06);">
              <a href="mailto:${escapeHtml(email)}?subject=Re:%20Your%20Project%20Request%20-%20TEKMEN%20REVOLUTION" style="display:inline-block;padding:14px 40px;background:linear-gradient(135deg,#6366F1,#7C3AED);color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;border-radius:12px;letter-spacing:0.5px;">
                ↩️ Reply to ${escapeHtml(name.split(" ")[0])}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#090D1A;padding:24px 36px;border-radius:0 0 24px 24px;text-align:center;border:1px solid rgba(255,255,255,0.04);border-top:none;">
              <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.25);font-weight:600;letter-spacing:3px;text-transform:uppercase;">
                TEKMEN REVOLUTION
              </p>
              <p style="margin:6px 0 0;font-size:11px;color:rgba(255,255,255,0.15);">
                This email was generated automatically from your portfolio contact form.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ── Escape HTML to prevent XSS in email ──────────────────────
function escapeHtml(str) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return str.replace(/[&<>"']/g, (c) => map[c]);
}

// ═══════════════════════════════════════════════════════════════
//  POST /api/contact — Main Contact Form Endpoint
// ═══════════════════════════════════════════════════════════════
app.post("/api/contact", contactLimiter, async (req, res) => {
  try {
    const { name, email, message, honeypot } = req.body;

    // 1. Anti-spam check
    if (isSpam({ honeypot, name: name || "", message: message || "" })) {
      // Silently accept to not tip off bots
      return res.status(200).json({ success: true });
    }

    // 2. Validate inputs
    const errors = validateContactForm({ name, email, message });
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    // 3. Build timestamp
    const timestamp = new Date().toLocaleString("fr-FR", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Africa/Douala", // Cameroon timezone
    });

    // 4. Send email
    const mailOptions = {
      from: `"TEKMEN REVOLUTION" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      replyTo: email.trim(),
      subject: "🚀 New Portfolio Project Request",
      html: buildEmailHTML({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        timestamp,
      }),
    };

    await transporter.sendMail(mailOptions);

    console.log(`✅ Email sent — From: ${name.trim()} <${email.trim()}>`);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("❌ Email send error:", error.message);

    return res.status(500).json({
      success: false,
      error: "Failed to send message. Please try again later.",
    });
  }
});

// ── Health check endpoint ────────────────────────────────────
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "tekmen-contact-api" });
});

// ── Start server ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 TEKMEN Contact API running on http://localhost:${PORT}`);
  console.log(`   POST /api/contact — Send contact form`);
  console.log(`   GET  /api/health  — Health check\n`);
});
