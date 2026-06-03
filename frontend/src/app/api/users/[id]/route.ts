import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const canManageUsers = (role?: string) => role === "OWNER" || role === "ADMINISTRATOR" || role === "ADMIN";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  const currentRole = (session?.user as any)?.role;

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  if (!canManageUsers(currentRole)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const user = await prisma.user.findUnique({
    where: { id: params.id },
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

  if (!user) {
    return new NextResponse("Not found", { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  const currentRole = (session?.user as any)?.role;

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  if (!canManageUsers(currentRole)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const { name, email } = await req.json();
  const data: { name?: string | null; email?: string } = {};

  if (typeof name === "string") {
    data.name = name.trim() || null;
  }

  if (typeof email === "string" && email.trim()) {
    data.email = email.trim().toLowerCase();
  }

  const user = await prisma.user.update({
    where: { id: params.id },
    data,
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

  return NextResponse.json(user);
}
