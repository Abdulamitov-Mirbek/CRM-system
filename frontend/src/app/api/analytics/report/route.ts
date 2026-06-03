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

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const deals = await prisma.deal.findMany({
      where: {
        createdAt: {
          gte: sevenDaysAgo,
        },
      },
    });

    const revenueByDayMap = deals.reduce<Record<string, number>>(
      (acc, deal) => {
        const createdAt = new Date(deal.createdAt);
        const label = `${createdAt.getDate().toString().padStart(2, "0")}.${(
          createdAt.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}`;
        acc[label] = (acc[label] || 0) + deal.value;
        return acc;
      },
      {},
    );

    const revenueByDay = Object.entries(revenueByDayMap)
      .sort(([a], [b]) => (a > b ? 1 : -1))
      .map(([label, value]) => ({ label, value }));

    const topDishes = [
      { name: "Капучино", quantity: 145, revenue: 29000 },
      { name: "Круассан", quantity: 89, revenue: 17800 },
      { name: "Латте", quantity: 76, revenue: 16720 },
    ];

    const topDrinks = [
      { name: "Американо", quantity: 112, revenue: 16800 },
      { name: "Флэт Уайт", quantity: 54, revenue: 13500 },
    ];

    return NextResponse.json({
      revenueByDay: revenueByDay,
      topDishes,
      topDrinks,
    });
  } catch (error: any) {
    console.error("ANALYTICS REPORT ERROR:", error);
    return new NextResponse(error.message || "Internal Server Error", {
      status: 500,
    });
  }
}
