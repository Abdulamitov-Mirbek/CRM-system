using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyCrm.Api.Data;
using MyCrm.Api.Dtos;
using MyCrm.Api.Models;

namespace MyCrm.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DealsController : ControllerBase
{
    private readonly AppDbContext _context;

    public DealsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<DealResponseDto>>> GetAll()
    {
        return await _context.Deals
            .Include(d => d.Contact)
            .Include(d => d.Stage)
            .Select(d => new DealResponseDto
            {
                Id = d.Id,
                Title = d.Title,
                Description = d.Description,
                Value = d.Value,
                ContactId = d.ContactId,
                ContactName = $"{d.Contact.FirstName} {d.Contact.LastName}",
                StageId = d.StageId,
                StageName = d.Stage.Name,
                CreatedAt = d.CreatedAt,
                UpdatedAt = d.UpdatedAt
            })
            .ToListAsync();
    }

    [HttpGet("stage/{stageId}")]
    public async Task<ActionResult<IEnumerable<DealResponseDto>>> GetByStage(Guid stageId)
    {
        return await _context.Deals
            .Where(d => d.StageId == stageId)
            .Include(d => d.Contact)
            .Include(d => d.Stage)
            .Select(d => new DealResponseDto
            {
                Id = d.Id,
                Title = d.Title,
                Description = d.Description,
                Value = d.Value,
                ContactId = d.ContactId,
                ContactName = $"{d.Contact.FirstName} {d.Contact.LastName}",
                StageId = d.StageId,
                StageName = d.Stage.Name,
                CreatedAt = d.CreatedAt,
                UpdatedAt = d.UpdatedAt
            })
            .ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<DealResponseDto>> Create(CreateDealDto dto)
    {
        var deal = new Deal
        {
            Id = Guid.NewGuid(),
            Title = dto.Title,
            Description = dto.Description,
            Value = dto.Value,
            ContactId = dto.ContactId,
            StageId = dto.StageId,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        _context.Deals.Add(deal);
        await _context.SaveChangesAsync();

        // Reload to get navigation properties
        var createdDeal = await _context.Deals
            .Include(d => d.Contact)
            .Include(d => d.Stage)
            .FirstAsync(d => d.Id == deal.Id);

        return Ok(new DealResponseDto
        {
            Id = createdDeal.Id,
            Title = createdDeal.Title,
            Description = createdDeal.Description,
            Value = createdDeal.Value,
            ContactId = createdDeal.ContactId,
            ContactName = $"{createdDeal.Contact.FirstName} {createdDeal.Contact.LastName}",
            StageId = createdDeal.StageId,
            StageName = createdDeal.Stage.Name,
            CreatedAt = createdDeal.CreatedAt,
            UpdatedAt = createdDeal.UpdatedAt
        });
    }

    [HttpPut("{id}/stage")]
    public async Task<IActionResult> UpdateStage(Guid id, UpdateDealStageDto dto)
    {
        var deal = await _context.Deals.FindAsync(id);
        if (deal == null)
        {
            return NotFound();
        }

        var stageExists = await _context.Stages.AnyAsync(s => s.Id == dto.StageId);
        if (!stageExists)
        {
            return BadRequest("Stage not found");
        }

        deal.StageId = dto.StageId;
        deal.UpdatedAt = DateTime.UtcNow;
        
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var deal = await _context.Deals.FindAsync(id);
        if (deal == null)
        {
            return NotFound();
        }

        _context.Deals.Remove(deal);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
