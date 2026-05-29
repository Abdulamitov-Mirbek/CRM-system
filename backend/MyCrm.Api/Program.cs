using Microsoft.EntityFrameworkCore;
using MyCrm.Api.Data;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    });

// Configure PostgreSQL
var connectionString = BuildPostgresConnectionString(
    builder.Configuration["DATABASE_URL"],
    builder.Configuration.GetConnectionString("DefaultConnection"));

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));

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

app.UseAuthorization();

app.MapControllers();

app.Run();

static string BuildPostgresConnectionString(string? databaseUrl, string? fallbackConnectionString)
{
    if (string.IsNullOrWhiteSpace(databaseUrl))
    {
        return fallbackConnectionString
            ?? throw new InvalidOperationException("Missing PostgreSQL connection string.");
    }

    var uri = new Uri(databaseUrl);
    var userInfo = uri.UserInfo.Split(':', 2);
    var username = Uri.UnescapeDataString(userInfo[0]);
    var password = userInfo.Length > 1 ? Uri.UnescapeDataString(userInfo[1]) : "";
    var database = uri.AbsolutePath.TrimStart('/');

    if (string.IsNullOrWhiteSpace(database))
    {
        database = "crm_mvp_db";
    }

    return $"Host={uri.Host};Port={uri.Port};Database={database};Username={username};Password={password}";
}
