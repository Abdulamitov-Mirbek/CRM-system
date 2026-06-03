using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyCrm.Api.Data;
using MyCrm.Api.Dtos;
using MyCrm.Api.Models;

namespace MyCrm.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactsController : ControllerBase
{
    private readonly AppDbContext _context;

    public ContactsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ContactResponseDto>>> GetAll()
    {
        return await _context.Contacts
            .Select(c => MapToDto(c))
            .ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ContactResponseDto>> GetById(Guid id)
    {
        var contact = await _context.Contacts
            .Include(c => c.Deals)
            .Include(c => c.Reservations)
            .Include(c => c.Reviews)
            .FirstOrDefaultAsync(c => c.Id == id);

        if (contact == null)
        {
            return NotFound();
        }

        return MapToDto(contact);
    }

    [HttpPost]
    public async Task<ActionResult<ContactResponseDto>> Create(CreateContactDto dto)
    {
        var contact = new Contact
        {
            Id = Guid.NewGuid(),
            FirstName = dto.FirstName,
            LastName = dto.LastName,
            Email = dto.Email,
            Phone = dto.Phone,
            Company = dto.Company,
            Birthday = dto.Birthday,
            Gender = dto.Gender,
            Address = dto.Address,
            Status = dto.Status,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        _context.Contacts.Add(contact);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetById), new { id = contact.Id }, MapToDto(contact));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(Guid id, CreateContactDto dto)
    {
        var contact = await _context.Contacts.FindAsync(id);
        if (contact == null)
        {
            return NotFound();
        }

        contact.FirstName = dto.FirstName;
        contact.LastName = dto.LastName;
        contact.Email = dto.Email;
        contact.Phone = dto.Phone;
        contact.Company = dto.Company;
        contact.Birthday = dto.Birthday;
        contact.Gender = dto.Gender;
        contact.Address = dto.Address;
        contact.Status = dto.Status;
        contact.UpdatedAt = DateTime.UtcNow;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ContactExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var contact = await _context.Contacts.FindAsync(id);
        if (contact == null)
        {
            return NotFound();
        }

        _context.Contacts.Remove(contact);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool ContactExists(Guid id)
    {
        return _context.Contacts.Any(e => e.Id == id);
    }

    private static ContactResponseDto MapToDto(Contact c)
    {
        return new ContactResponseDto
        {
            Id = c.Id,
            FirstName = c.FirstName,
            LastName = c.LastName,
            Email = c.Email,
            Phone = c.Phone,
            Company = c.Company,
            Birthday = c.Birthday,
            Gender = c.Gender,
            Address = c.Address,
            Status = c.Status,
            BonusBalance = c.BonusBalance,
            LoyaltyLevel = c.LoyaltyLevel,
            TotalSpent = c.TotalSpent,
            CreatedAt = c.CreatedAt,
            UpdatedAt = c.UpdatedAt
        };
    }
}
