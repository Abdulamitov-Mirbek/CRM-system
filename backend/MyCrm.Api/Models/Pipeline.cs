using System.ComponentModel.DataAnnotations;

namespace MyCrm.Api.Models;

public class Pipeline
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    [MaxLength(100)]
    public required string Name { get; set; }

    public ICollection<Stage> Stages { get; set; } = new List<Stage>();
}
