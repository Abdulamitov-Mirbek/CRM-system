using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyCrm.Api.Data;
using MyCrm.Api.Dtos;

namespace MyCrm.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AnalyticsController : ControllerBase
{
    private readonly AppDbContext _context;

    public AnalyticsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("summary")]
    public async Task<ActionResult<DashboardSummaryDto>> GetSummary()
    {
        var deals = await _context.Deals.ToListAsync();
        var contactsCount = await _context.Contacts.CountAsync();

        var totalRevenue = deals.Sum(d => d.Value);
        var dailyRevenue = deals.Where(d => d.CreatedAt >= DateTime.UtcNow.Date).Sum(d => d.Value);
        var avgCheck = deals.Any() ? deals.Average(d => d.Value) : 0;

        return Ok(new DashboardSummaryDto
        {
            TotalRevenue = totalRevenue,
            DailyRevenue = dailyRevenue,
            AverageCheck = avgCheck,
            TotalOrders = deals.Count,
            TotalCustomers = contactsCount
        });
    }

    [HttpGet("report")]
    public async Task<ActionResult<AnalyticsReportDto>> GetReport()
    {
        var deals = await _context.Deals
            .Where(d => d.CreatedAt >= DateTime.UtcNow.AddDays(-7))
            .ToListAsync();

        var revenueByDay = deals
            .GroupBy(d => d.CreatedAt.Date)
            .Select(g => new ChartDataDto
            {
                Label = g.Key.ToString("dd.MM"),
                Value = g.Sum(d => d.Value)
            })
            .OrderBy(x => x.Label)
            .ToList();

        // Mocking popular items for now
        var topDishes = new List<PopularItemDto>
        {
            new() { Name = "Капучино", Quantity = 145, Revenue = 29000 },
            new() { Name = "Круассан", Quantity = 89, Revenue = 17800 },
            new() { Name = "Латте", Quantity = 76, Revenue = 16720 }
        };

        var topDrinks = new List<PopularItemDto>
        {
            new() { Name = "Американо", Quantity = 112, Revenue = 16800 },
            new() { Name = "Флэт Уайт", Quantity = 54, Revenue = 13500 }
        };

        return Ok(new AnalyticsReportDto
        {
            RevenueByDay = revenueByDay,
            TopDishes = topDishes,
            TopDrinks = topDrinks
        });
    }
}
