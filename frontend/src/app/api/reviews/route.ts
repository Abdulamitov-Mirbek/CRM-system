import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    const userId = (session.user as any).id;

    const reviews = await prisma.review.findMany({
      where: {
        contact: {
          userId: userId,
        },
      },
      include: {
        contact: true,
        responder: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(reviews);
  } catch (error: any) {
    console.error("GET REVIEWS ERROR:", error);
    return new NextResponse(error.message || "Internal Server Error", {
      status: 500,
    });
  }
}
