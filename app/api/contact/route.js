import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, organization, phone, message, _honey } = body;

    // Honeypot (bot)
    if (_honey && _honey.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    if (!fullName || !email) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,              // smtp.zoho.com
      port: Number(process.env.SMTP_PORT),      // 587
      secure: false,                            // TLS via STARTTLS on 587
      auth: {
        user: process.env.SMTP_USER,            // contact@aviaraai.com
        pass: process.env.SMTP_PASS,            // Zoho password/app password
      },
    });

    // Debug: verify connection & auth (keep for now while testing)
    await transporter.verify().catch((err) => {
      console.error("SMTP VERIFY ERROR:", err);
      throw err;
    });

    const mailOptions = {
      from: `"AviaraAI Contact" <${process.env.CONTACT_FROM_EMAIL}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${fullName}`,
      text: `
New contact form submission from AviaraAI website:

Name: ${fullName}
Email: ${email}
Organization: ${organization || "-"}
Phone: ${phone || "-"}

Message:
${message || "-"}
      `.trim(),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT API ERROR:", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
