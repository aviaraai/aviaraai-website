import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { validateContactForm, sanitizeText } from "@/lib/validator";

// Strict rate limiting for contact form: 3 submissions per hour per IP
const limiter = rateLimit({
  interval: 60 * 60 * 1000, // 1 hour
  uniqueTokenPerInterval: 500,
});

export async function POST(req) {
  try {
    // 1. RATE LIMITING - Prevent spam and DDoS
    const ip = getClientIp(req);
    try {
      await limiter.check(3, ip); // Only 3 submissions per hour
    } catch {
      console.warn(`[Contact API] Rate limit exceeded for IP: ${ip}`);
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            'Retry-After': '3600', // 1 hour
          }
        }
      );
    }

    // 2. PARSE AND VALIDATE REQUEST
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { ok: false, error: "Invalid request format" },
        { status: 400 }
      );
    }

    const { fullName, email, organization, phone, message, _honey } = body;

    // 3. HONEYPOT CHECK - Catch bots
    if (_honey && _honey.trim() !== "") {
      console.warn(`[Contact API] Honeypot triggered for IP: ${ip}`);
      // Return success to fool bots, but don't send email
      return NextResponse.json({ ok: true });
    }

    // 4. TIMING CHECK - Detect bots (form submitted too quickly)
    const submitTime = body._submitTime;
    if (submitTime) {
      const timeTaken = Date.now() - parseInt(submitTime, 10);
      if (timeTaken < 3000) { // Less than 3 seconds
        console.warn(`[Contact API] Form submitted too quickly (${timeTaken}ms) from IP: ${ip}`);
        return NextResponse.json({ ok: true }); // Fool bots
      }
    }

    // 5. INPUT VALIDATION - Prevent injection attacks
    const validation = validateContactForm({ fullName, email, organization, phone, message });

    if (!validation.isValid) {
      console.warn(`[Contact API] Validation failed from IP: ${ip}`, validation.errors);
      return NextResponse.json(
        { ok: false, error: validation.errors[0] },
        { status: 400 }
      );
    }

    // 6. SANITIZE INPUTS - Remove potentially harmful content
    const sanitizedData = {
      fullName: sanitizeText(fullName, 100),
      email: sanitizeText(email, 254),
      organization: sanitizeText(organization || '', 200),
      phone: sanitizeText(phone || '', 20),
      message: sanitizeText(message, 5000),
    };

    // 7. VERIFY SMTP CONFIGURATION
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('[Contact API] SMTP configuration missing');
      return NextResponse.json(
        { ok: false, error: "Email service not configured" },
        { status: 500 }
      );
    }

    // 8. CREATE EMAIL TRANSPORTER
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // TLS via STARTTLS on 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: true, // Verify SSL certificates
      },
      // Connection timeout
      connectionTimeout: 10000,
      greetingTimeout: 10000,
    });

    // 9. VERIFY SMTP CONNECTION
    try {
      await transporter.verify();
    } catch (err) {
      console.error("[Contact API] SMTP verification failed:", err);
      return NextResponse.json(
        { ok: false, error: "Email service temporarily unavailable" },
        { status: 503 }
      );
    }

    // 10. PREPARE EMAIL
    const mailOptions = {
      from: `"AviaraAI Contact Form" <${process.env.CONTACT_FROM_EMAIL}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: sanitizedData.email,
      subject: `New Contact: ${sanitizedData.fullName}`,
      text: `
NEW CONTACT FORM SUBMISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:         ${sanitizedData.fullName}
Email:        ${sanitizedData.email}
Organization: ${sanitizedData.organization || 'N/A'}
Phone:        ${sanitizedData.phone || 'N/A'}
IP Address:   ${ip}
Timestamp:    ${new Date().toISOString()}

Message:
${sanitizedData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sent from AviaraAI Contact Form
      `.trim(),
      // HTML version for better formatting
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Name:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${sanitizedData.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${sanitizedData.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Organization:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${sanitizedData.organization || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Phone:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${sanitizedData.phone || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>IP Address:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${ip}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Timestamp:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${new Date().toISOString()}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 8px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${sanitizedData.message}</p>
          </div>
          <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">
            Sent from AviaraAI Contact Form
          </p>
        </div>
      `,
    };

    // 11. SEND EMAIL
    try {
      await transporter.sendMail(mailOptions);
      console.log(`[Contact API] Email sent successfully from ${sanitizedData.email} (IP: ${ip})`);
    } catch (err) {
      console.error("[Contact API] Failed to send email:", err);
      return NextResponse.json(
        { ok: false, error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    // 12. SUCCESS RESPONSE
    return NextResponse.json(
      { ok: true, message: "Message sent successfully!" },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        }
      }
    );

  } catch (err) {
    console.error("[Contact API] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

// Block all other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405, headers: { 'Allow': 'POST' } }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405, headers: { 'Allow': 'POST' } }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405, headers: { 'Allow': 'POST' } }
  );
}
