import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const { email, name, emailVerified } = await req.json();

    if (typeof email !== "string" || !email.trim()) {
      return new NextResponse("Missing email", { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const incomingVerified = emailVerified === true;
    
    let user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!user) {
      const usersCount = await prisma.user.count();
      const role = usersCount === 0 ? "OWNER" : "WAITER";

      user = await prisma.user.create({
        data: {
          id: crypto.randomUUID(),
          email: normalizedEmail,
          name: name || normalizedEmail.split('@')[0],
          password: 'FIREBASE_MANAGED',
          emailVerified: incomingVerified,
          role,
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    } else {
      // Update verification status if it changed
      user = await prisma.user.update({
        where: { email: normalizedEmail },
        data: { 
          emailVerified: user.emailVerified || incomingVerified,
          updatedAt: new Date(),
        },
      });
    }

    return NextResponse.json(user);
  } catch (error: any) {
    console.error("SYNC ERROR:", error);
    // Return detailed error message for debugging
    return new NextResponse(error.message || "Internal Server Error", { status: 500 });
  }
}
