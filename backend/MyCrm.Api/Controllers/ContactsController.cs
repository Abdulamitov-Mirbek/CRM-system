using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyCrm.Api.Data;
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
    public async Task<ActionResult<IEnumerable<Contact>>> GetAll()
    {
        return await _context.Contacts.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Contact>> GetById(Guid id)
    {
        var contact = await _context.Contacts.FindAsync(id);

        if (contact == null)
        {
            return NotFound();
        }

        return contact;
    }

    [HttpPost]
    public async Task<ActionResult<Contact>> Create(Contact contact)
    {
        contact.Id = Guid.NewGuid();
        contact.CreatedAt = DateTime.UtcNow;
        contact.UpdatedAt = DateTime.UtcNow;

        _context.Contacts.Add(contact);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetById), new { id = contact.Id }, contact);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(Guid id, Contact contact)
    {
        if (id != contact.Id)
        {
            return BadRequest();
        }

        contact.UpdatedAt = DateTime.UtcNow;
        _context.Entry(contact).State = EntityState.Modified;

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
}
