using MyCrm.Api.Models;

namespace MyCrm.Api.Dtos;

public class CreateContactDto
{
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public required string Email { get; set; }
    public string? Phone { get; set; }
    public string? Company { get; set; }
    public ContactStatus Status { get; set; } = ContactStatus.Lead;
}

public class ContactResponseDto
{
    public Guid Id { get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public required string Email { get; set; }
    public string? Phone { get; set; }
    public string? Company { get; set; }
    public ContactStatus Status { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}
