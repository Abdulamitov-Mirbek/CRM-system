using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyCrm.Api.Data;
using MyCrm.Api.Dtos;
using MyCrm.Api.Models;

namespace MyCrm.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BranchesController : ControllerBase
{
    private readonly AppDbContext _context;

    public BranchesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<BranchResponseDto>>> GetAll()
    {
        return await _context.Branches
            .Select(b => new BranchResponseDto
            {
                Id = b.Id,
                Name = b.Name,
                Address = b.Address
            })
            .ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<BranchResponseDto>> Create(CreateBranchDto dto)
    {
        var branch = new Branch
        {
            Id = Guid.NewGuid(),
            Name = dto.Name,
            Address = dto.Address,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        _context.Branches.Add(branch);
        await _context.SaveChangesAsync();

        return Ok(new BranchResponseDto
        {
            Id = branch.Id,
            Name = branch.Name,
            Address = branch.Address
        });
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var branch = await _context.Branches.FindAsync(id);
        if (branch == null) return NotFound();

        _context.Branches.Remove(branch);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
