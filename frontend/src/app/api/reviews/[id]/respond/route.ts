import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(
  req: Request,
  { params }: { params: { id: string } },
) {
  const session = await getServerSession(authOptions);
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const id = params.id;
    const body = await req.json();
    const responseText = body.response;

    const updated = await prisma.review.update({
      where: { id },
      data: {
        response: responseText,
        responderId: (session.user as any).id,
      },
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    console.error("RESPOND REVIEW ERROR:", error);
    return new NextResponse(error.message || "Internal Server Error", {
      status: 500,
    });
  }
}
