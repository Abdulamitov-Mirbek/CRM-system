using System.ComponentModel.DataAnnotations;

namespace MyCrm.Api.Models;

public class Reservation
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    public Guid ContactId { get; set; }
    public Contact Contact { get; set; } = null!;

    public Guid? TableId { get; set; }
    public Table? Table { get; set; }

    public Guid? UserId { get; set; }
    public User? User { get; set; }

    [Required]
    public int GuestCount { get; set; }

    [Required]
    public DateTime StartTime { get; set; }

    [Required]
    public DateTime EndTime { get; set; }

    [Required]
    [MaxLength(20)]
    public string Status { get; set; } = "Pending"; // Pending, Confirmed, Seated, Cancelled, Completed

    public string? Notes { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
