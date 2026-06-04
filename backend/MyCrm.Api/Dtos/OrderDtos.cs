using System.ComponentModel.DataAnnotations;

namespace MyCrm.Api.Dtos;

// --- Client creates order ---
public class CreateOrderDto
{
    [Required, MaxLength(100)]
    public required string CustomerName { get; set; }

    [Required, MaxLength(20)]
    public required string Phone { get; set; }

    public string? Comment { get; set; }

    public Guid? TableId { get; set; }

    [Required, MinLength(1)]
    public required List<CreateOrderItemDto> Items { get; set; }
}

public class CreateOrderItemDto
{
    [Required]
    public Guid MenuItemId { get; set; }

    [Required, Range(1, 100)]
    public int Quantity { get; set; }
}

// --- Staff updates status ---
public class UpdateOrderStatusDto
{
    [Required]
    public required string Status { get; set; }
}

// --- Responses ---
public class OrderResponseDto
{
    public Guid Id { get; set; }
    public string CustomerName { get; set; } = null!;
    public string Phone { get; set; } = null!;
    public string? Comment { get; set; }
    public string Status { get; set; } = null!;
    public decimal TotalPrice { get; set; }
    public Guid? TableId { get; set; }
    public string? TableNumber { get; set; }
    public List<OrderItemResponseDto> Items { get; set; } = new();
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

public class OrderItemResponseDto
{
    public Guid Id { get; set; }
    public Guid MenuItemId { get; set; }
    public string MenuItemName { get; set; } = null!;
    public int Quantity { get; set; }
    public decimal Price { get; set; }
}
