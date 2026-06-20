require("dotenv").config({ path: require("path").join(__dirname, ".env") });
const express = require("express");
const cors = require("cors");
const twilio = require("twilio");

const app = express();

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:4200", // Angular dev server
      "http://localhost:4000", // Angular SSR dev
      /\.globalchemicals\.in$/, // your production domain — update as needed
    ],
  }),
);

// ── Twilio client ───────────────────────────────────────────────────────────
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
);
const FROM_WA = process.env.TWILIO_WHATSAPP_FROM; // e.g. whatsapp:+14155238886
const TO_WA = `whatsapp:+91${process.env.OWNER_PHONE}`; // 9924226931

// ── POST /api/order ─────────────────────────────────────────────────────────
app.post("/api/order", async (req, res) => {
  const { fullName, phone, email, product, quantity, city, message } = req.body;

  // Basic validation
  if (!fullName || !phone || !product || !quantity) {
    return res.status(400).json({
      success: false,
      error: "Name, phone, product and quantity are required.",
    });
  }

  const waMessage = `*🛒 New Order Enquiry*
*Global Chemicals & Minerals*
───────────────────────────
*Name:*     ${fullName}
*Phone:*    ${phone}
*Email:*    ${email || "—"}
*Product:*  ${product}
*Qty:*      ${quantity} bags
*City:*     ${city || "—"}
*Message:*  ${message || "—"}
───────────────────────────
_Sent via website order form_`;

  try {
    await client.messages.create({
      from: FROM_WA,
      to: TO_WA,
      body: waMessage,
    });

    return res.json({
      success: true,
      message:
        "Order enquiry submitted successfully! We will contact you within 2 business hours.",
    });
  } catch (err) {
    console.error("Twilio error:", err.message);
    return res.status(500).json({
      success: false,
      error:
        "Could not send message. Please call us directly at +91 99099 13216.",
    });
  }
});

// ── Health check ─────────────────────────────────────────────────────────────
app.get("/api/health", (_, res) => res.json({ status: "ok" }));

// ── Start ─────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`GCM backend running on http://localhost:${PORT}`),
);
