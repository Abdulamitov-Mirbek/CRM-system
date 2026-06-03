using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyCrm.Api.Authorization;
using MyCrm.Api.Data;
using MyCrm.Api.Dtos;
using MyCrm.Api.Models;

namespace MyCrm.Api.Controllers;

[ApiController]
[Route("users")]
public class UsersController : ControllerBase
{
    private static readonly HashSet<string> AllowedRoles = new(StringComparer.OrdinalIgnoreCase)
    {
        "OWNER",
        "ADMINISTRATOR",
        "MANAGER",
        "WAITER"
    };

    private readonly AppDbContext _context;
    private readonly PasswordHasher<User> _passwordHasher = new();

    public UsersController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Authorize(Policy = RbacPolicies.RequireAdmin)]
    public async Task<ActionResult<IEnumerable<UserResponseDto>>> GetAll()
    {
        var users = await _context.Users
            .OrderByDescending(u => u.CreatedAt)
            .Select(u => ToDto(u))
            .ToListAsync();

        return Ok(users);
    }

    [HttpGet("{id:guid}")]
    [Authorize(Policy = RbacPolicies.RequireAdmin)]
    public async Task<ActionResult<UserResponseDto>> GetById(Guid id)
    {
        var user = await _context.Users.FindAsync(id);
        if (user == null)
        {
            return NotFound();
        }

        return Ok(ToDto(user));
    }

    [HttpPost("invite")]
    [Authorize(Policy = RbacPolicies.RequireAdmin)]
    public async Task<ActionResult<UserResponseDto>> Invite(InviteUserDto dto)
    {
        var normalizedEmail = dto.Email.Trim().ToLowerInvariant();
        var requesterRole = User.FindFirst(System.Security.Claims.ClaimTypes.Role)?.Value;
        var requestedRole = NormalizeRole(dto.Role);

        if (requestedRole == null)
        {
            return BadRequest("Invalid role");
        }

        if (!string.Equals(requesterRole, "OWNER", StringComparison.OrdinalIgnoreCase))
        {
            requestedRole = "WAITER";
        }

        var exists = await _context.Users.AnyAsync(u => u.Email == normalizedEmail);
        if (exists)
        {
            return BadRequest("User already exists");
        }

        var user = new User
        {
            Id = Guid.NewGuid(),
            Email = normalizedEmail,
            Name = string.IsNullOrWhiteSpace(dto.Name) ? normalizedEmail.Split('@')[0] : dto.Name.Trim(),
            Password = "TEMPORARY",
            Role = requestedRole,
            IsActive = true,
            EmailVerified = true,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        var temporaryPassword = Guid.NewGuid().ToString("N")[..12];
        user.Password = _passwordHasher.HashPassword(user, temporaryPassword);

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetById), new { id = user.Id }, ToDto(user));
    }

    [HttpPut("{id:guid}/role")]
    [Authorize(Policy = RbacPolicies.RequireOwner)]
    public async Task<ActionResult<UserResponseDto>> UpdateRole(Guid id, UpdateUserRoleDto dto)
    {
        var role = NormalizeRole(dto.Role);
        if (role == null)
        {
            return BadRequest("Invalid role");
        }

        var user = await _context.Users.FindAsync(id);
        if (user == null)
        {
            return NotFound();
        }

        user.Role = role;
        user.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();

        return Ok(ToDto(user));
    }

    [HttpPut("{id:guid}/status")]
    [Authorize(Policy = RbacPolicies.RequireOwner)]
    public async Task<ActionResult<UserResponseDto>> UpdateStatus(Guid id, UpdateUserStatusDto dto)
    {
        var requesterId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
        if (string.Equals(requesterId, id.ToString(), StringComparison.OrdinalIgnoreCase))
        {
            return BadRequest("Owner cannot block themselves");
        }

        var user = await _context.Users.FindAsync(id);
        if (user == null)
        {
            return NotFound();
        }

        user.IsActive = dto.IsActive;
        user.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();

        return Ok(ToDto(user));
    }

    private static string? NormalizeRole(string role)
    {
        var normalized = role.Trim().ToUpperInvariant();
        if (normalized == "ADMIN")
        {
            normalized = "ADMINISTRATOR";
        }

        return AllowedRoles.Contains(normalized) ? normalized : null;
    }

    private static UserResponseDto ToDto(User user)
    {
        return new UserResponseDto
        {
            Id = user.Id,
            Name = user.Name,
            Email = user.Email,
            Role = user.Role,
            IsActive = user.IsActive,
            EmailVerified = user.EmailVerified,
            CreatedAt = user.CreatedAt,
            UpdatedAt = user.UpdatedAt
        };
    }
}
