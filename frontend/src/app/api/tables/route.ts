import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    const branchId = (session.user as any).branchId;

    const tables = await prisma.table.findMany({
      where: {
        branchId: branchId || undefined,
      },
      orderBy: { number: "asc" },
    });

    return NextResponse.json(tables);
  } catch (error: any) {
    console.error("GET TABLES ERROR:", error);
    return new NextResponse(error.message || "Internal Server Error", {
      status: 500,
    });
  }
}
