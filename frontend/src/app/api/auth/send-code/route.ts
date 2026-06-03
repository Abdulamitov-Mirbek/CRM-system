import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Настройка отправителя (введите свои данные Gmail для реальной отправки)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Ваш email (например bnf.crm@gmail.com)
    pass: process.env.EMAIL_PASS, // Пароль приложения (App Password)
  },
});

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (typeof email !== "string" || !email.trim()) {
      return new NextResponse("Email required", { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // 1. Генерируем 6-значный код
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = new Date(Date.now() + 10 * 60 * 1000); // 10 минут жизни

    // 2. Сохраняем в базу
    await prisma.user.update({
      where: { email: normalizedEmail },
      data: {
        verificationCode: code,
        verificationExpires: expires,
      },
    });

    // 3. Пытаемся отправить реально
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail({
        from: '"Velocity CRM" <' + process.env.EMAIL_USER + '>',
        to: normalizedEmail,
        subject: "Код подтверждения Velocity CRM",
        html: `
          <div style="font-family: sans-serif; padding: 20px; background: #050a18; color: white; border-radius: 20px;">
            <h1 style="color: #4cd7f6;">Подтверждение аккаунта</h1>
            <p>Ваш код безопасности для доступа к системе:</p>
            <div style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #8b5cf6; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 10px; display: inline-block;">
              ${code}
            </div>
            <p style="color: #666; margin-top: 20px;">Код действителен 10 минут. Если вы не запрашивали этот код, просто проигнорируйте письмо.</p>
          </div>
        `,
      });
      return NextResponse.json({ success: true, method: 'email' });
    } else {
      // Если почта не настроена - пишем в консоль разработчика
      console.log("-----------------------------------------");
      console.log(`КРИТИЧЕСКИЙ СИГНАЛ: Код для ${normalizedEmail} -> ${code}`);
      console.log("-----------------------------------------");
      return NextResponse.json({ success: true, method: 'console' });
    }
  } catch (error: any) {
    console.error("EMAIL SEND ERROR:", error);
    return new NextResponse(error.message, { status: 500 });
  }
}
