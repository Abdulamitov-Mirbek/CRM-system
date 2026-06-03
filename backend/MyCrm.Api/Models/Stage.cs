using System.ComponentModel.DataAnnotations;

namespace MyCrm.Api.Models;

public class Stage
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    [MaxLength(100)]
    public required string Name { get; set; }

    [Required]
    public int Order { get; set; }

    [Required]
    public Guid PipelineId { get; set; }

    public Pipeline Pipeline { get; set; } = null!;

    public ICollection<Deal> Deals { get; set; } = new List<Deal>();
}
