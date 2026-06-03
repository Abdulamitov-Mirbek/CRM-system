import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const reservations = await prisma.reservation.findMany({
      include: {
        contact: true,
        table: true,
      },
      orderBy: {
        startTime: 'desc',
      },
    });

    const mapped = reservations.map(r => ({
      id: r.id,
      contactId: r.contactId,
      contactName: `${r.contact.firstName} ${r.contact.lastName}`,
      tableId: r.tableId,
      tableNumber: r.table?.number,
      guestCount: r.guestCount,
      startTime: r.startTime,
      endTime: r.endTime,
      status: r.status,
      notes: r.notes,
      createdAt: r.createdAt,
    }));

    return NextResponse.json(mapped);
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const data = await req.json();
    const reservation = await prisma.reservation.create({
      data: {
        ...data,
        userId: (session.user as any).id,
      },
      include: {
        contact: true,
        table: true,
      },
    });

    const mapped = {
      id: reservation.id,
      contactId: reservation.contactId,
      contactName: `${reservation.contact.firstName} ${reservation.contact.lastName}`,
      tableId: reservation.tableId,
      tableNumber: reservation.table?.number,
      guestCount: reservation.guestCount,
      startTime: reservation.startTime,
      endTime: reservation.endTime,
      status: reservation.status,
      notes: reservation.notes,
      createdAt: reservation.createdAt,
    };

    return NextResponse.json(mapped);
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
