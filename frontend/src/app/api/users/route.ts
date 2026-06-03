import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const canManageUsers = (role?: string) => role === "OWNER" || role === "ADMINISTRATOR" || role === "ADMIN";

export async function GET() {
  const session = await getServerSession(authOptions);
  const currentRole = (session?.user as any)?.role;

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  if (!canManageUsers(currentRole)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
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

  return NextResponse.json(users);
}
