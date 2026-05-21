// ═══════════════════════════════════════════════════════════════
//  TEKMEN REVOLUTION — Vercel Serverless Function
//  POST /api/contact → Send email via Nodemailer + Gmail SMTP
// ═══════════════════════════════════════════════════════════════

import nodemailer from "nodemailer";

// ── Rate Limiting (in-memory, per serverless instance) ───────
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5; // max 5 emails per IP per window

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { windowStart: now, count: 1 });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count++;
  return false;
}

// ── Validation ───────────────────────────────────────────────
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateForm({ name, email, message }) {
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

// ── Anti-Spam ────────────────────────────────────────────────
function isSpam({ honeypot, name, message }) {
  if (honeypot) return true;
  const spamPatterns = [
    /\b(viagra|casino|lottery|winner|click here|buy now)\b/i,
    /(http[s]?:\/\/){3,}/i,
  ];
  const combined = `${name} ${message}`;
  return spamPatterns.some((p) => p.test(combined));
}

// ── HTML Escape ──────────────────────────────────────────────
function escapeHtml(str) {
  const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
  return str.replace(/[&<>"']/g, (c) => map[c]);
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

// ═══════════════════════════════════════════════════════════════
//  Vercel Serverless Handler
// ═══════════════════════════════════════════════════════════════
export default async function handler(req, res) {
  // ── Only allow POST ────────────────────────────────────────
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  // ── CORS Headers ───────────────────────────────────────────
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    // ── Env check ────────────────────────────────────────────
    const { EMAIL_USER, EMAIL_PASS, EMAIL_RECEIVER } = process.env;

    if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_RECEIVER) {
      console.error("❌ Missing environment variables:", {
        EMAIL_USER: !!EMAIL_USER,
        EMAIL_PASS: !!EMAIL_PASS,
        EMAIL_RECEIVER: !!EMAIL_RECEIVER,
      });
      return res.status(500).json({
        success: false,
        error: "Server configuration error. Please contact the administrator.",
      });
    }

    const { name, email, message, honeypot } = req.body || {};

    console.log("📨 Contact form submission received:", {
      name: name ? `${name.substring(0, 20)}...` : "MISSING",
      email: email ? `${email.substring(0, 15)}...` : "MISSING",
      messageLength: message?.length || 0,
    });

    // ── Rate limiting ────────────────────────────────────────
    const clientIp =
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.headers["x-real-ip"] ||
      "unknown";

    if (isRateLimited(clientIp)) {
      console.warn(`⚠️ Rate limited IP: ${clientIp}`);
      return res.status(429).json({
        success: false,
        error: "Too many requests. Please try again later.",
      });
    }

    // ── Anti-spam ────────────────────────────────────────────
    if (isSpam({ honeypot, name: name || "", message: message || "" })) {
      console.warn("🤖 Spam detected — silently accepting");
      return res.status(200).json({ success: true });
    }

    // ── Validate ─────────────────────────────────────────────
    const errors = validateForm({ name, email, message });
    if (errors.length > 0) {
      console.warn("⚠️ Validation errors:", errors);
      return res.status(400).json({ success: false, errors });
    }

    // ── Build timestamp ──────────────────────────────────────
    const timestamp = new Date().toLocaleString("fr-FR", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Africa/Douala",
    });

    // ── Create Nodemailer transporter ────────────────────────
    console.log("📧 Creating SMTP transporter...");
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // ── Send email ───────────────────────────────────────────
    const mailOptions = {
      from: `"TEKMEN REVOLUTION" <${EMAIL_USER}>`,
      to: EMAIL_RECEIVER,
      replyTo: email.trim(),
      subject: "🚀 New Portfolio Project Request",
      html: buildEmailHTML({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        timestamp,
      }),
    };

    console.log("📤 Sending email to:", EMAIL_RECEIVER);
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully! MessageId:", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("❌ Email send FAILED:", {
      errorMessage: error.message,
      errorCode: error.code,
      errorCommand: error.command,
    });

    // Provide user-friendly error based on the error type
    let userMessage = "Failed to send message. Please try again later.";

    if (error.code === "EAUTH") {
      console.error("🔐 SMTP Authentication failed — check EMAIL_PASS (Gmail App Password)");
      userMessage = "Server email configuration error. Please contact the administrator.";
    }

    return res.status(500).json({
      success: false,
      error: userMessage,
    });
  }
}
