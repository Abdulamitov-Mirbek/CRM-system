import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

const roles = ["OWNER", "ADMINISTRATOR", "MANAGER", "WAITER"] as const;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function randomPassword() {
  return Math.random().toString(36).slice(2, 8) + Math.random().toString(36).slice(2, 8).toUpperCase();
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const currentRole = (session?.user as any)?.role;

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  if (currentRole !== "OWNER" && currentRole !== "ADMINISTRATOR" && currentRole !== "ADMIN") {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const { email, name, role } = await req.json();

  if (typeof email !== "string" || !email.trim()) {
    return new NextResponse("Email required", { status: 400 });
  }

  const normalizedEmail = email.trim().toLowerCase();
  let requestedRole = typeof role === "string" && roles.includes(role as any) ? role : "WAITER";

  if (currentRole === "ADMINISTRATOR" || currentRole === "ADMIN") {
    requestedRole = "WAITER";
  }

  const existingUser = await prisma.user.findUnique({
    where: { email: normalizedEmail },
  });

  if (existingUser) {
    return new NextResponse("User already exists", { status: 400 });
  }

  const temporaryPassword = randomPassword();
  const hashedPassword = await bcrypt.hash(temporaryPassword, 10);

  const user = await prisma.user.create({
    data: {
      email: normalizedEmail,
      name: typeof name === "string" && name.trim() ? name.trim() : normalizedEmail.split("@")[0],
      password: hashedPassword,
      role: requestedRole,
      isActive: true,
      emailVerified: true,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isActive: true,
      emailVerified: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    await transporter.sendMail({
      from: `"Velocity CRM" <${process.env.EMAIL_USER}>`,
      to: normalizedEmail,
      subject: "Velocity CRM employee invitation",
      html: `
        <div style="font-family: sans-serif; padding: 20px; background: #050a18; color: white; border-radius: 20px;">
          <h1 style="color: #4cd7f6;">You were invited to Velocity CRM</h1>
          <p>Email: <strong>${normalizedEmail}</strong></p>
          <p>Temporary password:</p>
          <div style="font-size: 24px; font-weight: bold; letter-spacing: 2px; color: #8b5cf6;">${temporaryPassword}</div>
        </div>
      `,
    });

    return NextResponse.json({ user, method: "email" });
  }

  console.log("-----------------------------------------");
  console.log(`INVITE for ${normalizedEmail} -> ${temporaryPassword}`);
  console.log("-----------------------------------------");

  return NextResponse.json({ user, method: "console", temporaryPassword });
}
