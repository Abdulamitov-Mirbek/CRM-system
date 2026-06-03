import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const pipelines = await prisma.pipeline.findMany({
    include: {
      stages: {
        orderBy: {
          order: 'asc',
        },
      },
    },
  });

  return NextResponse.json(pipelines);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const { name, stages } = await req.json();
    
    const pipeline = await prisma.pipeline.create({
      data: {
        name,
        stages: {
          create: stages?.map((s: string, index: number) => ({
            name: s,
            order: index,
          })) || [
            { name: "Lead", order: 0 },
            { name: "Qualified", order: 1 },
            { name: "Proposal", order: 2 },
            { name: "Negotiation", order: 3 },
            { name: "Closed", order: 4 },
          ],
        },
      },
      include: {
        stages: true,
      },
    });

    return NextResponse.json(pipeline);
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
