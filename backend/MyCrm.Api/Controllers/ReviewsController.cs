using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyCrm.Api.Data;
using MyCrm.Api.Dtos;
using MyCrm.Api.Models;

namespace MyCrm.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ReviewsController : ControllerBase
{
    private readonly AppDbContext _context;

    public ReviewsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ReviewResponseDto>>> GetAll()
    {
        return await _context.Reviews
            .Include(r => r.Contact)
            .Include(r => r.Responder)
            .Select(r => new ReviewResponseDto
            {
                Id = r.Id,
                ContactId = r.ContactId,
                ContactName = $"{r.Contact.FirstName} {r.Contact.LastName}",
                Rating = r.Rating,
                Comment = r.Comment,
                Response = r.Response,
                ResponderName = r.Responder != null ? r.Responder.Name : null,
                CreatedAt = r.CreatedAt
            })
            .OrderByDescending(r => r.CreatedAt)
            .ToListAsync();
    }

    [HttpPost("{id}/respond")]
    public async Task<IActionResult> Respond(Guid id, ResponseDto dto)
    {
        var review = await _context.Reviews.FindAsync(id);
        if (review == null) return NotFound();

        review.Response = dto.Response;
        review.ResponderId = dto.ResponderId;
        review.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();

        return NoContent();
    }
}
