using System.Security.Claims;
using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Options;

namespace MyCrm.Api.Authorization;

public class InternalApiAuthenticationHandler : AuthenticationHandler<AuthenticationSchemeOptions>
{
    public const string SchemeName = "InternalApi";

    public InternalApiAuthenticationHandler(
        IOptionsMonitor<AuthenticationSchemeOptions> options,
        ILoggerFactory logger,
        UrlEncoder encoder)
        : base(options, logger, encoder)
    {
    }

    protected override Task<AuthenticateResult> HandleAuthenticateAsync()
    {
        var expectedToken = Environment.GetEnvironmentVariable("INTERNAL_API_TOKEN");
        if (string.IsNullOrWhiteSpace(expectedToken))
        {
            return Task.FromResult(AuthenticateResult.NoResult());
        }

        var authHeader = Request.Headers.Authorization.ToString();
        const string bearerPrefix = "Bearer ";
        if (!authHeader.StartsWith(bearerPrefix, StringComparison.OrdinalIgnoreCase))
        {
            return Task.FromResult(AuthenticateResult.NoResult());
        }

        var token = authHeader[bearerPrefix.Length..].Trim();
        if (!string.Equals(token, expectedToken, StringComparison.Ordinal))
        {
            return Task.FromResult(AuthenticateResult.Fail("Invalid internal API token"));
        }

        var role = Request.Headers["X-User-Role"].ToString();
        var userId = Request.Headers["X-User-Id"].ToString();
        var email = Request.Headers["X-User-Email"].ToString();

        if (string.IsNullOrWhiteSpace(role))
        {
            return Task.FromResult(AuthenticateResult.Fail("Missing user role"));
        }

        var claims = new List<Claim>
        {
            new(ClaimTypes.Role, role),
            new(ClaimTypes.NameIdentifier, userId),
            new(ClaimTypes.Email, email)
        };

        var identity = new ClaimsIdentity(claims, SchemeName);
        var principal = new ClaimsPrincipal(identity);
        var ticket = new AuthenticationTicket(principal, SchemeName);

        return Task.FromResult(AuthenticateResult.Success(ticket));
    }
}
