using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyCrm.Api.Data;
using MyCrm.Api.Dtos;
using MyCrm.Api.Models;

namespace MyCrm.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ReservationsController : ControllerBase
{
    private readonly AppDbContext _context;

    public ReservationsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ReservationResponseDto>>> GetAll()
    {
        return await _context.Reservations
            .Include(r => r.Contact)
            .Include(r => r.Table)
            .Select(r => new ReservationResponseDto
            {
                Id = r.Id,
                ContactId = r.ContactId,
                ContactName = $"{r.Contact.FirstName} {r.Contact.LastName}",
                TableId = r.TableId,
                TableNumber = r.Table != null ? r.Table.Number : null,
                GuestCount = r.GuestCount,
                StartTime = r.StartTime,
                EndTime = r.EndTime,
                Status = r.Status,
                Notes = r.Notes,
                CreatedAt = r.CreatedAt
            })
            .ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<ReservationResponseDto>> Create(CreateReservationDto dto)
    {
        var reservation = new Reservation
        {
            Id = Guid.NewGuid(),
            ContactId = dto.ContactId,
            TableId = dto.TableId,
            GuestCount = dto.GuestCount,
            StartTime = dto.StartTime,
            EndTime = dto.EndTime,
            Notes = dto.Notes,
            Status = "Pending",
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        _context.Reservations.Add(reservation);
        await _context.SaveChangesAsync();

        var created = await _context.Reservations
            .Include(r => r.Contact)
            .Include(r => r.Table)
            .FirstAsync(r => r.Id == reservation.Id);

        return Ok(new ReservationResponseDto
        {
            Id = created.Id,
            ContactId = created.ContactId,
            ContactName = $"{created.Contact.FirstName} {created.Contact.LastName}",
            TableId = created.TableId,
            TableNumber = created.Table != null ? created.Table.Number : null,
            GuestCount = created.GuestCount,
            StartTime = created.StartTime,
            EndTime = created.EndTime,
            Status = created.Status,
            Notes = created.Notes,
            CreatedAt = created.CreatedAt
        });
    }

    [HttpPut("{id}/status")]
    public async Task<IActionResult> UpdateStatus(Guid id, UpdateReservationStatusDto dto)
    {
        var reservation = await _context.Reservations.FindAsync(id);
        if (reservation == null)
        {
            return NotFound();
        }

        reservation.Status = dto.Status;
        reservation.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();

        return NoContent();
    }
}
