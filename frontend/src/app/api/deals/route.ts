import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const deals = await prisma.deal.findMany({
    where: {
      userId: (session.user as any).id,
    },
    include: {
      contact: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return NextResponse.json(deals);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const data = await req.json();
    const deal = await prisma.deal.create({
      data: {
        ...data,
        userId: (session.user as any).id,
      },
    });

    return NextResponse.json(deal);
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
