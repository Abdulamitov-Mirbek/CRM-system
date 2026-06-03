import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  const currentRole = (session?.user as any)?.role;
  const currentUserId = (session?.user as any)?.id;

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  if (currentRole !== "OWNER") {
    return new NextResponse("Only Owner can change status", { status: 403 });
  }

  if (currentUserId === params.id) {
    return new NextResponse("Owner cannot block themselves", { status: 400 });
  }

  const { isActive } = await req.json();

  if (typeof isActive !== "boolean") {
    return new NextResponse("isActive boolean required", { status: 400 });
  }

  const user = await prisma.user.update({
    where: { id: params.id },
    data: { isActive },
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
