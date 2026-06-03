using System.ComponentModel.DataAnnotations;

namespace MyCrm.Api.Models;

public class Table
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    [MaxLength(10)]
    public required string Number { get; set; }

    [Required]
    public int Capacity { get; set; }

    [Required]
    public Guid BranchId { get; set; }
    public Branch Branch { get; set; } = null!;

    public ICollection<Reservation> Reservations { get; set; } = new List<Reservation>();

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
