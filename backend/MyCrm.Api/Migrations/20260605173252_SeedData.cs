using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyCrm.Api.Migrations
{
    /// <inheritdoc />
    public partial class SeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var branchId = Guid.NewGuid();
            migrationBuilder.InsertData(
                table: "Branches",
                columns: new[] { "Id", "Name", "Address", "CreatedAt", "UpdatedAt" },
                values: new object[] { branchId, "Main Branch", "123 Main St", DateTime.UtcNow, DateTime.UtcNow }
            );

            migrationBuilder.InsertData(
                table: "Tables",
                columns: new[] { "Id", "Number", "Capacity", "Status", "BranchId", "CreatedAt", "UpdatedAt" },
                values: new object[,]
                {
                    { Guid.NewGuid(), "1", 2, "Available", branchId, DateTime.UtcNow, DateTime.UtcNow },
                    { Guid.NewGuid(), "2", 4, "Available", branchId, DateTime.UtcNow, DateTime.UtcNow },
                    { Guid.NewGuid(), "3", 6, "Available", branchId, DateTime.UtcNow, DateTime.UtcNow },
                    { Guid.NewGuid(), "4", 2, "Available", branchId, DateTime.UtcNow, DateTime.UtcNow }
                }
            );

            var categoryId1 = Guid.NewGuid();
            var categoryId2 = Guid.NewGuid();

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "Name", "CreatedAt", "UpdatedAt" },
                values: new object[,]
                {
                    { categoryId1, "Burgers", DateTime.UtcNow, DateTime.UtcNow },
                    { categoryId2, "Drinks", DateTime.UtcNow, DateTime.UtcNow }
                }
            );

            migrationBuilder.InsertData(
                table: "MenuItems",
                columns: new[] { "Id", "Name", "Description", "Price", "CategoryId", "IsAvailable", "CreatedAt", "UpdatedAt" },
                values: new object[,]
                {
                    { Guid.NewGuid(), "Cheeseburger", "Classic cheeseburger", 12.99m, categoryId1, true, DateTime.UtcNow, DateTime.UtcNow },
                    { Guid.NewGuid(), "Veggie Burger", "Plant-based patty", 13.99m, categoryId1, true, DateTime.UtcNow, DateTime.UtcNow },
                    { Guid.NewGuid(), "Cola", "Refreshing soda", 2.50m, categoryId2, true, DateTime.UtcNow, DateTime.UtcNow },
                    { Guid.NewGuid(), "Lemonade", "Freshly squeezed", 3.50m, categoryId2, true, DateTime.UtcNow, DateTime.UtcNow }
                }
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
