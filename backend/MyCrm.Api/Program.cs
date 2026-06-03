using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication;
using MyCrm.Api.Authorization;
using MyCrm.Api.Data;
using System.Text.Json.Serialization;

// Load environment variables from .env file
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

// Add services to the container.
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    });

builder.Services.AddScoped<MyCrm.Api.Services.ILoyaltyService, MyCrm.Api.Services.LoyaltyService>();

// Configure PostgreSQL
var connectionString = Environment.GetEnvironmentVariable("CONNECTION_STRING") 
    ?? builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));

builder.Services
    .AddAuthentication(InternalApiAuthenticationHandler.SchemeName)
    .AddScheme<AuthenticationSchemeOptions, InternalApiAuthenticationHandler>(
        InternalApiAuthenticationHandler.SchemeName,
        options => { });

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

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

// Swagger/OpenAPI
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
