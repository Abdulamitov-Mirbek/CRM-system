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

    public DateTime? Birthday { get; set; }

    [MaxLength(10)]
    public string? Gender { get; set; }

    [MaxLength(255)]
    public string? Address { get; set; }

    [Required]
    public ContactStatus Status { get; set; } = ContactStatus.Lead;

    public decimal BonusBalance { get; set; } = 0;

    [MaxLength(20)]
    public string LoyaltyLevel { get; set; } = "Bronze";

    public decimal TotalSpent { get; set; } = 0;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    public Guid? UserId { get; set; }
    public User? User { get; set; }

    public ICollection<Deal> Deals { get; set; } = new List<Deal>();
    public ICollection<Reservation> Reservations { get; set; } = new List<Reservation>();
    public ICollection<Review> Reviews { get; set; } = new List<Review>();
}
