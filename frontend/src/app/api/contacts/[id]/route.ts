import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    const { id } = params;
    const contact = await prisma.contact.findUnique({
      where: { id },
      include: { reviews: true, deals: true, reservations: true },
    });

    if (!contact) return new NextResponse("Not Found", { status: 404 });
    if (contact.userId !== (session.user as any).id)
      return new NextResponse("Forbidden", { status: 403 });

    return NextResponse.json(contact);
  } catch (error: any) {
    console.error("GET CONTACT BY ID ERROR:", error);
    return new NextResponse(error.message || "Internal Server Error", {
      status: 500,
    });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  const session = await getServerSession(authOptions);
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const { id } = params;
    const data = await req.json();

    const existing = await prisma.contact.findUnique({ where: { id } });
    if (!existing) return new NextResponse("Not Found", { status: 404 });
    if (existing.userId !== (session.user as any).id)
      return new NextResponse("Forbidden", { status: 403 });

    const updated = await prisma.contact.update({
      where: { id },
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        company: data.company,
        birthday: data.birthday ? new Date(data.birthday) : undefined,
        gender: data.gender,
        address: data.address,
        status: data.status,
      },
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    console.error("UPDATE CONTACT ERROR:", error);
    return new NextResponse(error.message || "Internal Server Error", {
      status: 500,
    });
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } },
) {
  const session = await getServerSession(authOptions);
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const { id } = params;
    const existing = await prisma.contact.findUnique({ where: { id } });
    if (!existing) return new NextResponse("Not Found", { status: 404 });
    if (existing.userId !== (session.user as any).id)
      return new NextResponse("Forbidden", { status: 403 });

    await prisma.contact.delete({ where: { id } });
    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    console.error("DELETE CONTACT ERROR:", error);
    return new NextResponse(error.message || "Internal Server Error", {
      status: 500,
    });
  }
}
