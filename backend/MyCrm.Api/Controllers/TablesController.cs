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
public class TablesController : ControllerBase
{
    private readonly AppDbContext _context;

    public TablesController(AppDbContext context) => _context = context;

    [HttpGet]
    [AllowAnonymous]
    public async Task<ActionResult<IEnumerable<TableResponseDto>>> GetAll() =>
        await _context.Tables
            .Select(t => new TableResponseDto
            {
                Id = t.Id,
                Number = t.Number,
                Capacity = t.Capacity,
                BranchId = t.BranchId,
                Status = t.Status
            })
            .ToListAsync();

    [HttpPost]
    [Authorize(Policy = RbacPolicies.RequireAdmin)]
    public async Task<ActionResult<TableResponseDto>> Create(CreateTableDto dto)
    {
        var table = new Table
        {
            Id = Guid.NewGuid(),
            Number = dto.Number,
            Capacity = dto.Capacity,
            BranchId = dto.BranchId,
            Status = "Available",
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };
        _context.Tables.Add(table);
        await _context.SaveChangesAsync();
        return Ok(new TableResponseDto { Id = table.Id, Number = table.Number, Capacity = table.Capacity, BranchId = table.BranchId, Status = table.Status });
    }

    [HttpPatch("{id:guid}/status")]
    [Authorize(Policy = RbacPolicies.RequireWaiter)]
    public async Task<IActionResult> UpdateStatus(Guid id, [FromBody] string status)
    {
        var allowed = new[] { "Available", "Occupied", "Reserved", "Maintenance" };
        if (!allowed.Contains(status)) return BadRequest($"Allowed: {string.Join(", ", allowed)}");
        var table = await _context.Tables.FindAsync(id);
        if (table == null) return NotFound();
        table.Status = status;
        table.UpdatedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id:guid}")]
    [Authorize(Policy = RbacPolicies.RequireAdmin)]
    public async Task<IActionResult> Delete(Guid id)
    {
        var table = await _context.Tables.FindAsync(id);
        if (table == null) return NotFound();
        _context.Tables.Remove(table);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
