using System.ComponentModel.DataAnnotations;

namespace MyCrm.Api.Dtos;

public class UserResponseDto
{
    public Guid Id { get; set; }
    public string? Name { get; set; }
    public required string Email { get; set; }
    public required string Role { get; set; }
    public bool IsActive { get; set; }
    public bool EmailVerified { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

public class InviteUserDto
{
    [Required]
    [EmailAddress]
    public required string Email { get; set; }

    [MaxLength(100)]
    public string? Name { get; set; }

    [Required]
    public required string Role { get; set; }
}

public class UpdateUserRoleDto
{
    [Required]
    public required string Role { get; set; }
}

public class UpdateUserStatusDto
{
    public bool IsActive { get; set; }
}
