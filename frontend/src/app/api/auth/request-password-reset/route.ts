import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (typeof email !== "string" || !email.trim()) {
      return new NextResponse("Email required", { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = new Date(Date.now() + 10 * 60 * 1000);

    await prisma.user.update({
      where: { email: normalizedEmail },
      data: {
        verificationCode: code,
        verificationExpires: expires,
      },
    });

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail({
        from: `"Velocity CRM" <${process.env.EMAIL_USER}>`,
        to: normalizedEmail,
        subject: "Password reset code for Velocity CRM",
        html: `
          <div style="font-family: sans-serif; padding: 20px; background: #050a18; color: white; border-radius: 20px;">
            <h1 style="color: #4cd7f6;">Password reset</h1>
            <p>Use this code to set a new password:</p>
            <div style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #8b5cf6; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 10px; display: inline-block;">
              ${code}
            </div>
            <p style="color: #aaa; margin-top: 20px;">The code is valid for 10 minutes.</p>
          </div>
        `,
      });

      return NextResponse.json({ success: true, method: "email" });
    }

    console.log("-----------------------------------------");
    console.log(`PASSWORD RESET CODE for ${normalizedEmail} -> ${code}`);
    console.log("-----------------------------------------");

    return NextResponse.json({ success: true, method: "console" });
  } catch (error: any) {
    console.error("PASSWORD RESET REQUEST ERROR:", error);
    return new NextResponse(error.message, { status: 500 });
  }
}
