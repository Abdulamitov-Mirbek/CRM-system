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
public class ReservationsController : ControllerBase
{
    private readonly AppDbContext _context;

    public ReservationsController(AppDbContext context)
    {
        _context = context;
    }

    // PUBLIC — client books a table (no auth)
    [HttpPost("client")]
    [AllowAnonymous]
    public async Task<ActionResult<ReservationResponseDto>> ClientCreate(ClientCreateReservationDto dto)
    {
        if (dto.EndTime <= dto.StartTime)
            return BadRequest("End time must be after start time.");

        var reservation = new Reservation
        {
            Id = Guid.NewGuid(),
            CustomerName = dto.CustomerName.Trim(),
            Phone = dto.Phone.Trim(),
            TableId = dto.TableId,
            GuestCount = dto.GuestCount,
            StartTime = dto.StartTime,
            EndTime = dto.EndTime,
            Notes = dto.Notes?.Trim(),
            Status = "New",
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        _context.Reservations.Add(reservation);
        await _context.SaveChangesAsync();

        await _context.Entry(reservation).Reference(r => r.Table).LoadAsync();

        return CreatedAtAction(nameof(GetById), new { id = reservation.Id }, ToDto(reservation));
    }

    // PUBLIC — get available tables for a given time slot
    [HttpGet("available-tables")]
    [AllowAnonymous]
    public async Task<ActionResult<IEnumerable<TableResponseDto>>> GetAvailableTables(
        [FromQuery] DateTime start,
        [FromQuery] DateTime end,
        [FromQuery] int guests = 1)
    {
        var busyTableIds = await _context.Reservations
            .Where(r => r.Status != "Cancelled" && r.TableId != null
                && r.StartTime < end && r.EndTime > start)
            .Select(r => r.TableId!.Value)
            .ToListAsync();

        var tables = await _context.Tables
            .Where(t => t.Capacity >= guests && !busyTableIds.Contains(t.Id))
            .Select(t => new TableResponseDto
            {
                Id = t.Id,
                Number = t.Number,
                Capacity = t.Capacity,
                BranchId = t.BranchId,
                Status = t.Status
            })
            .ToListAsync();

        return Ok(tables);
    }

    // STAFF — get all reservations
    [HttpGet]
    [Authorize(Policy = RbacPolicies.RequireWaiter)]
    public async Task<ActionResult<IEnumerable<ReservationResponseDto>>> GetAll([FromQuery] string? status)
    {
        var query = _context.Reservations
            .Include(r => r.Contact)
            .Include(r => r.Table)
            .AsQueryable();

        if (!string.IsNullOrWhiteSpace(status))
            query = query.Where(r => r.Status == status);

        var list = await query
            .OrderByDescending(r => r.CreatedAt)
            .Select(r => ToDto(r))
            .ToListAsync();

        return Ok(list);
    }

    // STAFF — get single reservation
    [HttpGet("{id:guid}")]
    [Authorize(Policy = RbacPolicies.RequireWaiter)]
    public async Task<ActionResult<ReservationResponseDto>> GetById(Guid id)
    {
        var r = await _context.Reservations
            .Include(r => r.Contact)
            .Include(r => r.Table)
            .FirstOrDefaultAsync(r => r.Id == id);

        return r == null ? NotFound() : Ok(ToDto(r));
    }

    // STAFF — create reservation linked to a Contact
    [HttpPost]
    [Authorize(Policy = RbacPolicies.RequireWaiter)]
    public async Task<ActionResult<ReservationResponseDto>> Create(CreateReservationDto dto)
    {
        if (dto.EndTime <= dto.StartTime)
            return BadRequest("End time must be after start time.");

        var reservation = new Reservation
        {
            Id = Guid.NewGuid(),
            ContactId = dto.ContactId,
            TableId = dto.TableId,
            GuestCount = dto.GuestCount,
            StartTime = dto.StartTime,
            EndTime = dto.EndTime,
            Notes = dto.Notes,
            Status = "New",
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        _context.Reservations.Add(reservation);
        await _context.SaveChangesAsync();

        var created = await _context.Reservations
            .Include(r => r.Contact)
            .Include(r => r.Table)
            .FirstAsync(r => r.Id == reservation.Id);

        return CreatedAtAction(nameof(GetById), new { id = created.Id }, ToDto(created));
    }

    // STAFF — update status
    [HttpPatch("{id:guid}/status")]
    [Authorize(Policy = RbacPolicies.RequireWaiter)]
    public async Task<IActionResult> UpdateStatus(Guid id, UpdateReservationStatusDto dto)
    {
        var allowed = new[] { "New", "Confirmed", "Completed", "Cancelled" };
        if (!allowed.Contains(dto.Status))
            return BadRequest($"Invalid status. Allowed: {string.Join(", ", allowed)}");

        var reservation = await _context.Reservations.FindAsync(id);
        if (reservation == null) return NotFound();

        reservation.Status = dto.Status;
        reservation.UpdatedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    // Keep backward compat with old PUT /{id}/status
    [HttpPut("{id:guid}/status")]
    [Authorize(Policy = RbacPolicies.RequireWaiter)]
    public async Task<IActionResult> UpdateStatusPut(Guid id, UpdateReservationStatusDto dto)
        => await UpdateStatus(id, dto);

    private static ReservationResponseDto ToDto(Reservation r) => new()
    {
        Id = r.Id,
        ContactId = r.ContactId,
        CustomerName = r.CustomerName
            ?? (r.Contact != null ? $"{r.Contact.FirstName} {r.Contact.LastName}" : "—"),
        Phone = r.Phone ?? r.Contact?.Phone,
        TableId = r.TableId,
        TableNumber = r.Table?.Number,
        GuestCount = r.GuestCount,
        StartTime = r.StartTime,
        EndTime = r.EndTime,
        Status = r.Status,
        Notes = r.Notes,
        CreatedAt = r.CreatedAt
    };
}
