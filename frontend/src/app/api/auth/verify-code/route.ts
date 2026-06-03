import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, code } = await req.json();

    if (typeof email !== "string" || !email.trim()) {
      return new NextResponse("Email required", { status: 400 });
    }

    if (typeof code !== "string" || !/^\d{6}$/.test(code)) {
      return new NextResponse("Code must be 6 digits", { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!user || !user.verificationCode) {
      return new NextResponse("Код не найден", { status: 400 });
    }

    // Проверка времени жизни кода
    if (user.verificationExpires && new Date() > user.verificationExpires) {
      return new NextResponse("Срок действия кода истек", { status: 400 });
    }

    if (user.verificationCode !== code) {
      return new NextResponse("Неверный код", { status: 400 });
    }

    // Маркируем пользователя как подтвержденного
    await prisma.user.update({
      where: { email: normalizedEmail },
      data: {
        emailVerified: true,
        verificationCode: null,
        verificationExpires: null,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
