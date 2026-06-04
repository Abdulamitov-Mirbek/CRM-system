using System.ComponentModel.DataAnnotations;

namespace MyCrm.Api.Dtos;

public class CreateTableDto
{
    [Required, MaxLength(10)]
    public required string Number { get; set; }

    [Required, Range(1, 100)]
    public int Capacity { get; set; }

    [Required]
    public Guid BranchId { get; set; }
}

public class TableResponseDto
{
    public Guid Id { get; set; }
    public required string Number { get; set; }
    public int Capacity { get; set; }
    public Guid BranchId { get; set; }
    public string Status { get; set; } = "Available";
}

// Used by staff (requires contactId)
public class CreateReservationDto
{
    public Guid ContactId { get; set; }
    public Guid? TableId { get; set; }
    public int GuestCount { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime EndTime { get; set; }
    public string? Notes { get; set; }
}

// Used by clients (no auth, no contactId — name+phone instead)
public class ClientCreateReservationDto
{
    [Required, MaxLength(100)]
    public required string CustomerName { get; set; }

    [Required, MaxLength(20)]
    public required string Phone { get; set; }

    public Guid? TableId { get; set; }

    [Required, Range(1, 50)]
    public int GuestCount { get; set; }

    [Required]
    public DateTime StartTime { get; set; }

    [Required]
    public DateTime EndTime { get; set; }

    public string? Notes { get; set; }
}

public class ReservationResponseDto
{
    public Guid Id { get; set; }
    public Guid? ContactId { get; set; }
    public string CustomerName { get; set; } = null!;
    public string? Phone { get; set; }
    public Guid? TableId { get; set; }
    public string? TableNumber { get; set; }
    public int GuestCount { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime EndTime { get; set; }
    public string Status { get; set; } = null!;
    public string? Notes { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class UpdateReservationStatusDto
{
    [Required]
    public required string Status { get; set; }
}
