namespace MyCrm.Api.Dtos;

public class CreateTableDto
{
    public required string Number { get; set; }
    public int Capacity { get; set; }
    public Guid BranchId { get; set; }
}

public class TableResponseDto
{
    public Guid Id { get; set; }
    public required string Number { get; set; }
    public int Capacity { get; set; }
    public Guid BranchId { get; set; }
}

public class CreateReservationDto
{
    public Guid ContactId { get; set; }
    public Guid? TableId { get; set; }
    public int GuestCount { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime EndTime { get; set; }
    public string? Notes { get; set; }
}

public class ReservationResponseDto
{
    public Guid Id { get; set; }
    public Guid ContactId { get; set; }
    public string ContactName { get; set; } = null!;
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
    public required string Status { get; set; }
}
