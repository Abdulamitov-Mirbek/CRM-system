import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const contacts = await prisma.contact.findMany({
      where: {
        userId: (session.user as any).id,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(contacts);
  } catch (error: any) {
    console.error("GET CONTACTS ERROR:", error);
    return new NextResponse(error.message || "Internal Server Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const data = await req.json();
    const contact = await prisma.contact.create({
      data: {
        ...data,
        userId: (session.user as any).id,
      },
    });

    return NextResponse.json(contact);
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
