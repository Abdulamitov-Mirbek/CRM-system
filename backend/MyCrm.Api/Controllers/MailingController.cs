using Microsoft.AspNetCore.Mvc;
using MyCrm.Api.Dtos;

namespace MyCrm.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MailingController : ControllerBase
{
    [HttpPost("send")]
    public IActionResult Send(SendMailingDto dto)
    {
        // Mocking campaign sending logic
        // In a real app, this would integrate with Twilio, SendGrid, etc.
        Console.WriteLine($"Sending {dto.CampaignType} campaign via {dto.Type}: {dto.Title}");
        
        return Ok(new { Message = "Campaign started successfully", Status = "Processing" });
    }
}
