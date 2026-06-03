using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyCrm.Api.Data;
using MyCrm.Api.Dtos;
using MyCrm.Api.Models;

namespace MyCrm.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TablesController : ControllerBase
{
    private readonly AppDbContext _context;

    public TablesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<TableResponseDto>>> GetAll()
    {
        return await _context.Tables
            .Select(t => new TableResponseDto
            {
                Id = t.Id,
                Number = t.Number,
                Capacity = t.Capacity,
                BranchId = t.BranchId
            })
            .ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<TableResponseDto>> Create(CreateTableDto dto)
    {
        var table = new Table
        {
            Id = Guid.NewGuid(),
            Number = dto.Number,
            Capacity = dto.Capacity,
            BranchId = dto.BranchId,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        _context.Tables.Add(table);
        await _context.SaveChangesAsync();

        return Ok(new TableResponseDto
        {
            Id = table.Id,
            Number = table.Number,
            Capacity = table.Capacity,
            BranchId = table.BranchId
        });
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var table = await _context.Tables.FindAsync(id);
        if (table == null)
        {
            return NotFound();
        }

        _context.Tables.Remove(table);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
