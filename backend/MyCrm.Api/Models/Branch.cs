using System.ComponentModel.DataAnnotations;

namespace MyCrm.Api.Models;

public class Branch
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    [MaxLength(100)]
    public required string Name { get; set; }

    [MaxLength(255)]
    public string? Address { get; set; }

    public ICollection<User> Users { get; set; } = new List<User>();
    public ICollection<Table> Tables { get; set; } = new List<Table>();

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
