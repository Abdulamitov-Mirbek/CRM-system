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

    const deals = await prisma.deal.findMany();
    const contactsCount = await prisma.contact.count();

    const totalRevenue = deals.reduce((sum, deal) => sum + deal.value, 0);
    const dailyRevenue = deals
      .filter(
        (deal) => deal.createdAt >= new Date(new Date().setHours(0, 0, 0, 0)),
      )
      .reduce((sum, deal) => sum + deal.value, 0);
    const averageCheck =
      deals.length > 0
        ? deals.reduce((sum, deal) => sum + deal.value, 0) / deals.length
        : 0;

    return NextResponse.json({
      totalRevenue,
      dailyRevenue,
      averageCheck,
      totalOrders: deals.length,
      totalCustomers: contactsCount,
    });
  } catch (error: any) {
    console.error("ANALYTICS SUMMARY ERROR:", error);
    return new NextResponse(error.message || "Internal Server Error", {
      status: 500,
    });
  }
}
