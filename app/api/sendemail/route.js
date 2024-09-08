import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email } = await req.json();
    console.log(name, email);

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `Thank you for joining the waitlist, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
          <h2>Hi ${name},</h2>
          <p>Thank you for signing up! We're thrilled to have you on our waitlist.</p>
          <p>Stay tuned for exciting updates as we prepare to launch. In the meantime, you can follow us on <a href="https://www.instagram.com/clarity_ai/?hl=en" target="_blank">Instagram</a> or check out our <a href="https://www.linkedin.com/in/clarity-ai-016563327/" target="_blank">LinkedIn</a> for the latest news.</p>
          <p>If you have any questions, feel free to <a href="mailto:clarity.ai.solutions@gmail.com">reach out</a>!</p>
          <p>Best regards,</p>
          <p>The ClarityAI Team</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Confirmation email sent!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
