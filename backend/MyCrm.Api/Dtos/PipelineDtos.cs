using MyCrm.Api.Models;

namespace MyCrm.Api.Dtos;

public class CreatePipelineDto
{
    public required string Name { get; set; }
    public List<string>? Stages { get; set; }
}

public class PipelineResponseDto
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public List<StageResponseDto> Stages { get; set; } = new();
}

public class StageResponseDto
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public int Order { get; set; }
}

public class CreateDealDto
{
    public required string Title { get; set; }
    public string? Description { get; set; }
    public decimal Value { get; set; }
    public Guid ContactId { get; set; }
    public Guid StageId { get; set; }
}

public class DealResponseDto
{
    public Guid Id { get; set; }
    public required string Title { get; set; }
    public string? Description { get; set; }
    public decimal Value { get; set; }
    public Guid ContactId { get; set; }
    public string ContactName { get; set; } = null!;
    public Guid StageId { get; set; }
    public string StageName { get; set; } = null!;
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

public class UpdateDealStageDto
{
    public Guid StageId { get; set; }
}
