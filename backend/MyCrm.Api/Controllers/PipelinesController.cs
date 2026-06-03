using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyCrm.Api.Data;
using MyCrm.Api.Dtos;
using MyCrm.Api.Models;

namespace MyCrm.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PipelinesController : ControllerBase
{
    private readonly AppDbContext _context;

    public PipelinesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<PipelineResponseDto>>> GetAll()
    {
        return await _context.Pipelines
            .Include(p => p.Stages)
            .Select(p => new PipelineResponseDto
            {
                Id = p.Id,
                Name = p.Name,
                Stages = p.Stages
                    .OrderBy(s => s.Order)
                    .Select(s => new StageResponseDto
                    {
                        Id = s.Id,
                        Name = s.Name,
                        Order = s.Order
                    }).ToList()
            })
            .ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<PipelineResponseDto>> Create(CreatePipelineDto dto)
    {
        var pipeline = new Pipeline
        {
            Id = Guid.NewGuid(),
            Name = dto.Name
        };

        if (dto.Stages != null && dto.Stages.Any())
        {
            for (int i = 0; i < dto.Stages.Count; i++)
            {
                pipeline.Stages.Add(new Stage
                {
                    Id = Guid.NewGuid(),
                    Name = dto.Stages[i],
                    Order = i
                });
            }
        }
        else
        {
            // Default stages if none provided
            var defaultStages = new[] { "Lead", "Qualified", "Proposal", "Negotiation", "Closed" };
            for (int i = 0; i < defaultStages.Length; i++)
            {
                pipeline.Stages.Add(new Stage
                {
                    Id = Guid.NewGuid(),
                    Name = defaultStages[i],
                    Order = i
                });
            }
        }

        _context.Pipelines.Add(pipeline);
        await _context.SaveChangesAsync();

        return Ok(new PipelineResponseDto
        {
            Id = pipeline.Id,
            Name = pipeline.Name,
            Stages = pipeline.Stages
                .OrderBy(s => s.Order)
                .Select(s => new StageResponseDto
                {
                    Id = s.Id,
                    Name = s.Name,
                    Order = s.Order
                }).ToList()
        });
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var pipeline = await _context.Pipelines.FindAsync(id);
        if (pipeline == null)
        {
            return NotFound();
        }

        _context.Pipelines.Remove(pipeline);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
