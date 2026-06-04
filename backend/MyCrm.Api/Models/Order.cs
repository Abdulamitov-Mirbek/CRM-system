using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyCrm.Api.Models;

public class Order
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    [MaxLength(100)]
    public required string CustomerName { get; set; }

    [Required]
    [MaxLength(20)]
    public required string Phone { get; set; }

    public string? Comment { get; set; }

    [Required]
    [MaxLength(20)]
    public string Status { get; set; } = "New";
    // New, Accepted, Preparing, Ready, Issued, Completed, Cancelled

    [Column(TypeName = "decimal(18,2)")]
    public decimal TotalPrice { get; set; }

    public Guid? TableId { get; set; }
    public Table? Table { get; set; }

    public ICollection<OrderItem> Items { get; set; } = new List<OrderItem>();

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}

public class OrderItem
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    public Guid OrderId { get; set; }
    public Order Order { get; set; } = null!;

    [Required]
    public Guid MenuItemId { get; set; }
    public MenuItem MenuItem { get; set; } = null!;

    [Required]
    public int Quantity { get; set; }

    [Required]
    [Column(TypeName = "decimal(18,2)")]
    public decimal Price { get; set; }
}
