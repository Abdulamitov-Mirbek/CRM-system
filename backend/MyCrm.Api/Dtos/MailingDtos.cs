namespace MyCrm.Api.Dtos;

public class CreateReviewDto
{
    public Guid ContactId { get; set; }
    public int Rating { get; set; }
    public string? Comment { get; set; }
}

public class ReviewResponseDto
{
    public Guid Id { get; set; }
    public Guid ContactId { get; set; }
    public string ContactName { get; set; } = null!;
    public int Rating { get; set; }
    public string? Comment { get; set; }
    public string? Response { get; set; }
    public string? ResponderName { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class ResponseDto
{
    public required string Response { get; set; }
    public Guid ResponderId { get; set; }
}

public class SendMailingDto
{
    public string Title { get; set; } = null!;
    public string Content { get; set; } = null!;
    public string Type { get; set; } = null!; // Email, SMS, WhatsApp
    public string CampaignType { get; set; } = null!; // Birthday, Inactive, Promotion
}
