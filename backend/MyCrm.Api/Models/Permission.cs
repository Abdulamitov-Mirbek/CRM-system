using System.ComponentModel.DataAnnotations;
using MyCrm.Api.Enums;

namespace MyCrm.Api.Models;

public class Permission
{
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    public PermissionName Name { get; set; }

    [MaxLength(255)]
    public string? Description { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    public ICollection<RolePermission> Roles { get; set; } = new List<RolePermission>();
}
