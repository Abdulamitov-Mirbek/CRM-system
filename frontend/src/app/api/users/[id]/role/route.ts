import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const roles = ["OWNER", "ADMINISTRATOR", "MANAGER", "WAITER"] as const;

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  const currentRole = (session?.user as any)?.role;

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  if (currentRole !== "OWNER") {
    return new NextResponse("Only Owner can change roles", { status: 403 });
  }

  const { role } = await req.json();

  if (typeof role !== "string" || !roles.includes(role as any)) {
    return new NextResponse("Invalid role", { status: 400 });
  }

  const user = await prisma.user.update({
    where: { id: params.id },
    data: { role },
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
