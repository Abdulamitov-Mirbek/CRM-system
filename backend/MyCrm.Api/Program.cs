using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using MyCrm.Api.Authorization;
using MyCrm.Api.Data;
using System.Text;
using System.Text.Json.Serialization;

try
{
    DotNetEnv.Env.TraversePath().Load();
    Console.WriteLine(".env loaded successfully");
}
catch (Exception ex)
{
    Console.WriteLine($"Error loading .env file: {ex.Message}");
}

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    });

builder.Services.AddScoped<MyCrm.Api.Services.ILoyaltyService, MyCrm.Api.Services.LoyaltyService>();

var connectionString = Environment.GetEnvironmentVariable("CONNECTION_STRING")
    ?? builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));

// Support both InternalApi (NextAuth forwarding) and JWT (direct login)
builder.Services
    .AddAuthentication(options =>
    {
        options.DefaultScheme = "MultiScheme";
    })
    .AddPolicyScheme("MultiScheme", "MultiScheme", options =>
    {
        options.ForwardDefaultSelector = ctx =>
        {
            var auth = ctx.Request.Headers.Authorization.ToString();
            if (auth.StartsWith("Bearer ") && auth.Length > 50)
            {
                // Long Bearer token = JWT
                var token = auth["Bearer ".Length..].Trim();
                return token.Count(c => c == '.') == 2
                    ? JwtBearerDefaults.AuthenticationScheme
                    : InternalApiAuthenticationHandler.SchemeName;
            }
            return InternalApiAuthenticationHandler.SchemeName;
        };
    })
    .AddScheme<AuthenticationSchemeOptions, InternalApiAuthenticationHandler>(
        InternalApiAuthenticationHandler.SchemeName,
        options => { })
    .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, options =>
    {
        var secret = Environment.GetEnvironmentVariable("JWT_SECRET")
            ?? builder.Configuration["Jwt:Secret"]
            ?? "DAAMDA_CRM_SECRET_KEY_CHANGE_IN_PRODUCTION_32CH";
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secret)),
            ValidateIssuer = false,
            ValidateAudience = false,
            ClockSkew = TimeSpan.Zero
        };
    });

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy(RbacPolicies.RequireOwner, policy =>
        policy.RequireRole("OWNER"));

    options.AddPolicy(RbacPolicies.RequireAdmin, policy =>
        policy.RequireRole("OWNER", "ADMINISTRATOR", "ADMIN"));

    options.AddPolicy(RbacPolicies.RequireManager, policy =>
        policy.RequireRole("OWNER", "ADMINISTRATOR", "ADMIN", "MANAGER"));

    options.AddPolicy(RbacPolicies.RequireWaiter, policy =>
        policy.RequireRole("OWNER", "ADMINISTRATOR", "ADMIN", "MANAGER", "WAITER"));
});

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "DAAMDA CRM API",
        Version = "v1",
        Description = "REST API для CRM системы DAAMDA"
    });
    c.AddSecurityDefinition("Bearer", new Microsoft.OpenApi.Models.OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = Microsoft.OpenApi.Models.SecuritySchemeType.Http,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = Microsoft.OpenApi.Models.ParameterLocation.Header,
        Description = "Enter JWT token"
    });
    c.AddSecurityRequirement(new Microsoft.OpenApi.Models.OpenApiSecurityRequirement
    {
        {
            new Microsoft.OpenApi.Models.OpenApiSecurityScheme
            {
                Reference = new Microsoft.OpenApi.Models.OpenApiReference
                {
                    Type = Microsoft.OpenApi.Models.ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            Array.Empty<string>()
        }
    });
});

var app = builder.Build();

// Swagger available in all environments
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "DAAMDA CRM API v1");
    c.RoutePrefix = "swagger";
});

app.UseCors();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();
