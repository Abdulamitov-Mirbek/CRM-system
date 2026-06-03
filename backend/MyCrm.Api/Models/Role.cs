using System.ComponentModel.DataAnnotations;
using MyCrm.Api.Enums;

namespace MyCrm.Api.Models;

public class Role
{
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    public RoleName Name { get; set; }

    [MaxLength(255)]
    public string? Description { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    public ICollection<UserRole> UserRoles { get; set; } = new List<UserRole>();
    public ICollection<RolePermission> Permissions { get; set; } = new List<RolePermission>();
}
