import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { email, name, password } = await req.json();

    if (typeof email !== "string" || !email.trim() || !password) {
      return new NextResponse("Missing email or password", { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingUser) {
      return new NextResponse("User already exists", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const usersCount = await prisma.user.count();
    const role = usersCount === 0 ? "OWNER" : "WAITER";

    const user = await prisma.user.create({
      data: {
        email: normalizedEmail,
        name,
        password: hashedPassword,
        role,
        isActive: true,
      },
    });

    return NextResponse.json(user);
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
