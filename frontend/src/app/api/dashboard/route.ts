import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const userId = (session.user as any).id;

    const contactsCount = await prisma.contact.count({ where: { userId } });
    const deals = await prisma.deal.findMany({ where: { userId } });
    
    const totalValue = deals.reduce((acc, deal) => acc + deal.value, 0);
    const winRate = deals.length > 0 ? (deals.filter(d => d.stage === 'Closed').length / deals.length) * 100 : 0;

    // Group deals by stage for pipeline chart
    const pipeline = [
      { stage: 'Lead', value: deals.filter(d => d.stage === 'Lead').reduce((acc, d) => acc + d.value, 0) },
      { stage: 'Discovery', value: deals.filter(d => d.stage === 'Discovery').reduce((acc, d) => acc + d.value, 0) },
      { stage: 'Proposal', value: deals.filter(d => d.stage === 'Proposal').reduce((acc, d) => acc + d.value, 0) },
      { stage: 'Closing', value: deals.filter(d => d.stage === 'Closing').reduce((acc, d) => acc + d.value, 0) },
    ];

    return NextResponse.json({
      contactsCount,
      totalValue,
      winRate: winRate.toFixed(1),
      pipeline,
      recentDeals: deals.slice(0, 5),
    });
  } catch (error: any) {
    console.error("DASHBOARD ERROR:", error);
    return new NextResponse(error.message || "Internal Server Error", { status: 500 });
  }
}
