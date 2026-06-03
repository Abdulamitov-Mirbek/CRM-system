using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyCrm.Api.Data;
using MyCrm.Api.Dtos;
using MyCrm.Api.Models;

namespace MyCrm.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MenuController : ControllerBase
{
    private readonly AppDbContext _context;

    public MenuController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("categories")]
    public async Task<ActionResult<IEnumerable<CategoryResponseDto>>> GetCategories()
    {
        return await _context.Categories
            .Include(c => c.Items)
            .Select(c => new CategoryResponseDto
            {
                Id = c.Id,
                Name = c.Name,
                Items = c.Items.Select(i => new MenuItemResponseDto
                {
                    Id = i.Id,
                    Name = i.Name,
                    Description = i.Description,
                    Price = i.Price,
                    CategoryId = i.CategoryId,
                    IsAvailable = i.IsAvailable
                }).ToList()
            })
            .ToListAsync();
    }

    [HttpPost("categories")]
    public async Task<ActionResult<CategoryResponseDto>> CreateCategory(CreateCategoryDto dto)
    {
        var category = new Category
        {
            Id = Guid.NewGuid(),
            Name = dto.Name,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        _context.Categories.Add(category);
        await _context.SaveChangesAsync();

        return Ok(new CategoryResponseDto { Id = category.Id, Name = category.Name });
    }

    [HttpPost("items")]
    public async Task<ActionResult<MenuItemResponseDto>> CreateMenuItem(CreateMenuItemDto dto)
    {
        var item = new MenuItem
        {
            Id = Guid.NewGuid(),
            Name = dto.Name,
            Description = dto.Description,
            Price = dto.Price,
            CategoryId = dto.CategoryId,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        _context.MenuItems.Add(item);
        await _context.SaveChangesAsync();

        return Ok(new MenuItemResponseDto
        {
            Id = item.Id,
            Name = item.Name,
            Description = item.Description,
            Price = item.Price,
            CategoryId = item.CategoryId,
            IsAvailable = item.IsAvailable
        });
    }

    [HttpPatch("items/{id}/availability")]
    public async Task<IActionResult> UpdateAvailability(Guid id, [FromBody] bool isAvailable)
    {
        var item = await _context.MenuItems.FindAsync(id);
        if (item == null) return NotFound();

        item.IsAvailable = isAvailable;
        item.UpdatedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
