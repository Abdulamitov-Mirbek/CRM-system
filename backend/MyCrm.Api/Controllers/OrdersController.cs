using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyCrm.Api.Authorization;
using MyCrm.Api.Data;
using MyCrm.Api.Dtos;
using MyCrm.Api.Models;

namespace MyCrm.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrdersController : ControllerBase
{
    private readonly AppDbContext _context;

    public OrdersController(AppDbContext context)
    {
        _context = context;
    }

    // PUBLIC — client places order (no auth required)
    [HttpPost]
    [AllowAnonymous]
    public async Task<ActionResult<OrderResponseDto>> Create(CreateOrderDto dto)
    {
        var menuItemIds = dto.Items.Select(i => i.MenuItemId).ToList();
        var menuItems = await _context.MenuItems
            .Where(m => menuItemIds.Contains(m.Id) && m.IsAvailable)
            .ToListAsync();

        if (menuItems.Count != dto.Items.Count)
            return BadRequest("One or more menu items are unavailable or not found.");

        var order = new Order
        {
            Id = Guid.NewGuid(),
            CustomerName = dto.CustomerName.Trim(),
            Phone = dto.Phone.Trim(),
            Comment = dto.Comment?.Trim(),
            TableId = dto.TableId,
            Status = "New",
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        decimal total = 0;
        foreach (var item in dto.Items)
        {
            var menuItem = menuItems.First(m => m.Id == item.MenuItemId);
            var linePrice = menuItem.Price * item.Quantity;
            total += linePrice;
            order.Items.Add(new OrderItem
            {
                Id = Guid.NewGuid(),
                MenuItemId = item.MenuItemId,
                Quantity = item.Quantity,
                Price = linePrice
            });
        }
        order.TotalPrice = total;

        _context.Orders.Add(order);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetById), new { id = order.Id }, await BuildResponseDto(order.Id));
    }

    // STAFF — get single order
    [HttpGet("{id:guid}")]
    [Authorize(Policy = RbacPolicies.RequireWaiter)]
    public async Task<ActionResult<OrderResponseDto>> GetById(Guid id)
    {
        var dto = await BuildResponseDto(id);
        return dto == null ? NotFound() : Ok(dto);
    }

    // STAFF — get all orders with optional status filter
    [HttpGet]
    [Authorize(Policy = RbacPolicies.RequireWaiter)]
    public async Task<ActionResult<IEnumerable<OrderResponseDto>>> GetAll([FromQuery] string? status)
    {
        var query = _context.Orders
            .Include(o => o.Items)
                .ThenInclude(i => i.MenuItem)
            .Include(o => o.Table)
            .AsQueryable();

        if (!string.IsNullOrWhiteSpace(status))
            query = query.Where(o => o.Status == status);

        var orders = await query
            .OrderByDescending(o => o.CreatedAt)
            .Select(o => ToDto(o))
            .ToListAsync();

        return Ok(orders);
    }

    // STAFF — update order status
    [HttpPatch("{id:guid}/status")]
    [Authorize(Policy = RbacPolicies.RequireWaiter)]
    public async Task<IActionResult> UpdateStatus(Guid id, UpdateOrderStatusDto dto)
    {
        var allowed = new[] { "New", "Accepted", "Preparing", "Ready", "Issued", "Completed", "Cancelled" };
        if (!allowed.Contains(dto.Status))
            return BadRequest($"Invalid status. Allowed: {string.Join(", ", allowed)}");

        var order = await _context.Orders.FindAsync(id);
        if (order == null) return NotFound();

        order.Status = dto.Status;
        order.UpdatedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private async Task<OrderResponseDto?> BuildResponseDto(Guid id)
    {
        var order = await _context.Orders
            .Include(o => o.Items)
                .ThenInclude(i => i.MenuItem)
            .Include(o => o.Table)
            .FirstOrDefaultAsync(o => o.Id == id);

        return order == null ? null : ToDto(order);
    }

    private static OrderResponseDto ToDto(Order o) => new()
    {
        Id = o.Id,
        CustomerName = o.CustomerName,
        Phone = o.Phone,
        Comment = o.Comment,
        Status = o.Status,
        TotalPrice = o.TotalPrice,
        TableId = o.TableId,
        TableNumber = o.Table?.Number,
        CreatedAt = o.CreatedAt,
        UpdatedAt = o.UpdatedAt,
        Items = o.Items.Select(i => new OrderItemResponseDto
        {
            Id = i.Id,
            MenuItemId = i.MenuItemId,
            MenuItemName = i.MenuItem?.Name ?? "",
            Quantity = i.Quantity,
            Price = i.Price
        }).ToList()
    };
}
