namespace MyCrm.Api.Dtos;

public class CreateCategoryDto
{
    public required string Name { get; set; }
}

public class CategoryResponseDto
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public List<MenuItemResponseDto> Items { get; set; } = new();
}

public class CreateMenuItemDto
{
    public required string Name { get; set; }
    public string? Description { get; set; }
    public decimal Price { get; set; }
    public Guid CategoryId { get; set; }
}

public class MenuItemResponseDto
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public string? Description { get; set; }
    public decimal Price { get; set; }
    public Guid CategoryId { get; set; }
    public bool IsAvailable { get; set; }
}

public class CreateBranchDto
{
    public required string Name { get; set; }
    public string? Address { get; set; }
}

public class BranchResponseDto
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public string? Address { get; set; }
}
