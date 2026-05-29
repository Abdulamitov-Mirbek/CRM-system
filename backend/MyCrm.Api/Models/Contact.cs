using System.ComponentModel.DataAnnotations;

namespace MyCrm.Api.Models;

public enum ContactStatus
{
    Lead,
    Prospect,
    Customer
}

public class Contact
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    [MaxLength(100)]
    public required string FirstName { get; set; }

    [Required]
    [MaxLength(100)]
    public required string LastName { get; set; }

    [Required]
    [EmailAddress]
    [MaxLength(255)]
    public required string Email { get; set; }

    [Phone]
    [MaxLength(20)]
    public string? Phone { get; set; }

    [MaxLength(100)]
    public string? Company { get; set; }

    [Required]
    public ContactStatus Status { get; set; } = ContactStatus.Lead;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
