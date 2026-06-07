using System.ComponentModel.DataAnnotations;

namespace MyCrm.Api.Models;

public class User
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [MaxLength(100)]
    public string? Name { get; set; }

    [Required]
    [EmailAddress]
    [MaxLength(255)]
    public required string Email { get; set; }

    [Required]
    [MaxLength(255)]
    public required string Password { get; set; }

    [MaxLength(255)]
    public string? Image { get; set; }

    [Required]
    [MaxLength(20)]
    public string Role { get; set; } = "WAITER"; // OWNER, ADMINISTRATOR, MANAGER, WAITER

    public bool IsActive { get; set; } = true;

    public Guid? BranchId { get; set; }
    public Branch? Branch { get; set; }

    public bool EmailVerified { get; set; } = false;

    [MaxLength(10)]
    public string? VerificationCode { get; set; }

    public DateTime? VerificationExpires { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    public ICollection<Contact> Contacts { get; set; } = new List<Contact>();
    public ICollection<Deal> Deals { get; set; } = new List<Deal>();
    public ICollection<Reservation> Reservations { get; set; } = new List<Reservation>();
    public ICollection<UserRole> UserRoles { get; set; } = new List<UserRole>();
}
