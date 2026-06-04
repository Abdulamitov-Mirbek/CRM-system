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
public class MenuController : ControllerBase
{
    private readonly AppDbContext _context;

    public MenuController(AppDbContext context)
    {
        _context = context;
    }

    // PUBLIC — clients browse menu
    [HttpGet]
    [AllowAnonymous]
    public async Task<ActionResult<IEnumerable<CategoryResponseDto>>> GetMenu()
    {
        return await _context.Categories
            .Include(c => c.Items)
            .OrderBy(c => c.Name)
            .Select(c => new CategoryResponseDto
            {
                Id = c.Id,
                Name = c.Name,
                Items = c.Items
                    .Where(i => i.IsAvailable)
                    .Select(i => new MenuItemResponseDto
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

    // STAFF — full categories list including unavailable
    [HttpGet("categories")]
    [Authorize(Policy = RbacPolicies.RequireWaiter)]
    public async Task<ActionResult<IEnumerable<CategoryResponseDto>>> GetCategories()
    {
        return await _context.Categories
            .Include(c => c.Items)
            .OrderBy(c => c.Name)
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

    // STAFF — create category
    [HttpPost("categories")]
    [Authorize(Policy = RbacPolicies.RequireAdmin)]
    public async Task<ActionResult<CategoryResponseDto>> CreateCategory(CreateCategoryDto dto)
    {
        var category = new Category
        {
            Id = Guid.NewGuid(),
            Name = dto.Name.Trim(),
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        _context.Categories.Add(category);
        await _context.SaveChangesAsync();

        return Ok(new CategoryResponseDto { Id = category.Id, Name = category.Name, Items = new() });
    }

    // STAFF — update category
    [HttpPut("categories/{id:guid}")]
    [Authorize(Policy = RbacPolicies.RequireAdmin)]
    public async Task<IActionResult> UpdateCategory(Guid id, CreateCategoryDto dto)
    {
        var category = await _context.Categories.FindAsync(id);
        if (category == null) return NotFound();

        category.Name = dto.Name.Trim();
        category.UpdatedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    // STAFF — delete category
    [HttpDelete("categories/{id:guid}")]
    [Authorize(Policy = RbacPolicies.RequireAdmin)]
    public async Task<IActionResult> DeleteCategory(Guid id)
    {
        var category = await _context.Categories.FindAsync(id);
        if (category == null) return NotFound();

        _context.Categories.Remove(category);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    // STAFF — create menu item
    [HttpPost("items")]
    [Authorize(Policy = RbacPolicies.RequireAdmin)]
    public async Task<ActionResult<MenuItemResponseDto>> CreateMenuItem(CreateMenuItemDto dto)
    {
        var item = new MenuItem
        {
            Id = Guid.NewGuid(),
            Name = dto.Name.Trim(),
            Description = dto.Description?.Trim(),
            Price = dto.Price,
            CategoryId = dto.CategoryId,
            IsAvailable = true,
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

    // STAFF — update menu item
    [HttpPut("items/{id:guid}")]
    [Authorize(Policy = RbacPolicies.RequireAdmin)]
    public async Task<IActionResult> UpdateMenuItem(Guid id, CreateMenuItemDto dto)
    {
        var item = await _context.MenuItems.FindAsync(id);
        if (item == null) return NotFound();

        item.Name = dto.Name.Trim();
        item.Description = dto.Description?.Trim();
        item.Price = dto.Price;
        item.CategoryId = dto.CategoryId;
        item.UpdatedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    // STAFF — delete menu item
    [HttpDelete("items/{id:guid}")]
    [Authorize(Policy = RbacPolicies.RequireAdmin)]
    public async Task<IActionResult> DeleteMenuItem(Guid id)
    {
        var item = await _context.MenuItems.FindAsync(id);
        if (item == null) return NotFound();

        _context.MenuItems.Remove(item);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    // STAFF — toggle availability
    [HttpPatch("items/{id:guid}/availability")]
    [Authorize(Policy = RbacPolicies.RequireAdmin)]
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
