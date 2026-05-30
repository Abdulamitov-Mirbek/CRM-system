import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, name, emailVerified } = await req.json();

    if (!email) {
      return new NextResponse("Missing email", { status: 400 });
    }
    
    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          name: name || email.split('@')[0],
          password: 'FIREBASE_MANAGED',
          emailVerified: emailVerified || false,
        },
      });
    } else {
      // Update verification status if it changed
      user = await prisma.user.update({
        where: { email },
        data: { emailVerified: emailVerified || false },
      });
    }

    return NextResponse.json(user);
  } catch (error: any) {
    console.error("SYNC ERROR:", error);
    return new NextResponse(error.message, { status: 500 });
  }
}
