namespace MyCrm.Api.Dtos;

public class DashboardSummaryDto
{
    public decimal TotalRevenue { get; set; }
    public decimal DailyRevenue { get; set; }
    public decimal AverageCheck { get; set; }
    public int TotalOrders { get; set; }
    public int TotalCustomers { get; set; }
}

public class ChartDataDto
{
    public string Label { get; set; } = null!;
    public decimal Value { get; set; }
}

public class PopularItemDto
{
    public string Name { get; set; } = null!;
    public int Quantity { get; set; }
    public decimal Revenue { get; set; }
}

public class AnalyticsReportDto
{
    public List<ChartDataDto> RevenueByDay { get; set; } = new();
    public List<PopularItemDto> TopDishes { get; set; } = new();
    public List<PopularItemDto> TopDrinks { get; set; } = new();
}
