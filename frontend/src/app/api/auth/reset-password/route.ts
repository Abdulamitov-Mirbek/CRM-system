import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { email, code, password } = await req.json();

    if (typeof email !== "string" || !email.trim()) {
      return new NextResponse("Email required", { status: 400 });
    }

    if (typeof code !== "string" || !/^\d{6}$/.test(code)) {
      return new NextResponse("Code must be 6 digits", { status: 400 });
    }

    if (typeof password !== "string" || password.length < 6) {
      return new NextResponse("Password must be at least 6 characters", { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!user || !user.verificationCode) {
      return new NextResponse("Reset code not found", { status: 400 });
    }

    if (user.verificationExpires && new Date() > user.verificationExpires) {
      return new NextResponse("Reset code expired", { status: 400 });
    }

    if (user.verificationCode !== code) {
      return new NextResponse("Invalid reset code", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: { email: normalizedEmail },
      data: {
        password: hashedPassword,
        emailVerified: true,
        verificationCode: null,
        verificationExpires: null,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("PASSWORD RESET ERROR:", error);
    return new NextResponse(error.message, { status: 500 });
  }
}
