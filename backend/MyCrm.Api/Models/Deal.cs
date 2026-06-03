using System.ComponentModel.DataAnnotations;

namespace MyCrm.Api.Models;

public class Deal
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    [MaxLength(200)]
    public required string Title { get; set; }

    public string? Description { get; set; }

    [Required]
    public decimal Value { get; set; }

    [Required]
    public Guid ContactId { get; set; }

    public Contact Contact { get; set; } = null!;

    [Required]
    public Guid StageId { get; set; }

    public Stage Stage { get; set; } = null!;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
