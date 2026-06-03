using System.ComponentModel.DataAnnotations;

namespace MyCrm.Api.Models;

public class Review
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    public Guid ContactId { get; set; }
    public Contact Contact { get; set; } = null!;

    [Required]
    public int Rating { get; set; } // 1-5

    public string? Comment { get; set; }

    public string? Response { get; set; }

    public Guid? ResponderId { get; set; }
    public User? Responder { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
