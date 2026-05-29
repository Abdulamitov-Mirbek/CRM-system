using Microsoft.EntityFrameworkCore;
using MyCrm.Api.Models;

namespace MyCrm.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Contact> Contacts { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        modelBuilder.Entity<Contact>()
            .Property(c => c.Status)
            .HasConversion<string>();
    }
}
