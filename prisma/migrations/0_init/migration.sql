-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "Users" (
    "Id" UUID NOT NULL,
    "Name" VARCHAR(100),
    "Email" VARCHAR(255) NOT NULL,
    "Password" VARCHAR(255) NOT NULL,
    "Image" VARCHAR(255),
    "Role" VARCHAR(20) NOT NULL,
    "IsActive" BOOLEAN NOT NULL,
    "BranchId" UUID,
    "EmailVerified" BOOLEAN NOT NULL,
    "VerificationCode" VARCHAR(10),
    "VerificationExpires" TIMESTAMPTZ(6),
    "CreatedAt" TIMESTAMPTZ(6) NOT NULL,
    "UpdatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "PK_Users" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "Id" UUID NOT NULL,
    "Name" TEXT NOT NULL,
    "Description" VARCHAR(255),
    "CreatedAt" TIMESTAMPTZ(6) NOT NULL,
    "UpdatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "PK_Roles" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Permissions" (
    "Id" UUID NOT NULL,
    "Name" TEXT NOT NULL,
    "Description" VARCHAR(255),
    "CreatedAt" TIMESTAMPTZ(6) NOT NULL,
    "UpdatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "PK_Permissions" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "UserRoles" (
    "UserId" UUID NOT NULL,
    "RoleId" UUID NOT NULL,
    "CreatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "PK_UserRoles" PRIMARY KEY ("UserId","RoleId")
);

-- CreateTable
CREATE TABLE "RolePermissions" (
    "RoleId" UUID NOT NULL,
    "PermissionId" UUID NOT NULL,

    CONSTRAINT "PK_RolePermissions" PRIMARY KEY ("RoleId","PermissionId")
);

-- CreateTable
CREATE TABLE "Branches" (
    "Id" UUID NOT NULL,
    "Name" VARCHAR(100) NOT NULL,
    "Address" VARCHAR(255),
    "CreatedAt" TIMESTAMPTZ(6) NOT NULL,
    "UpdatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "PK_Branches" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Contacts" (
    "Id" UUID NOT NULL,
    "FirstName" VARCHAR(100) NOT NULL,
    "LastName" VARCHAR(100) NOT NULL,
    "Email" VARCHAR(255) NOT NULL,
    "Phone" VARCHAR(20),
    "Company" VARCHAR(100),
    "Status" TEXT NOT NULL,
    "CreatedAt" TIMESTAMPTZ(6) NOT NULL,
    "UpdatedAt" TIMESTAMPTZ(6) NOT NULL,
    "Address" VARCHAR(255),
    "Birthday" TIMESTAMPTZ(6),
    "BonusBalance" DECIMAL NOT NULL DEFAULT 0.0,
    "Gender" VARCHAR(10),
    "LoyaltyLevel" VARCHAR(20) NOT NULL DEFAULT '',
    "TotalSpent" DECIMAL NOT NULL DEFAULT 0.0,
    "UserId" UUID,

    CONSTRAINT "PK_Contacts" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Reservations" (
    "Id" UUID NOT NULL,
    "ContactId" UUID,
    "CustomerName" VARCHAR(100),
    "Phone" VARCHAR(20),
    "TableId" UUID,
    "UserId" UUID,
    "GuestCount" INTEGER NOT NULL,
    "StartTime" TIMESTAMPTZ(6) NOT NULL,
    "EndTime" TIMESTAMPTZ(6) NOT NULL,
    "Status" VARCHAR(20) NOT NULL,
    "Notes" TEXT,
    "CreatedAt" TIMESTAMPTZ(6) NOT NULL,
    "UpdatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "PK_Reservations" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Tables" (
    "Id" UUID NOT NULL,
    "Number" VARCHAR(10) NOT NULL,
    "Capacity" INTEGER NOT NULL,
    "Status" VARCHAR(20) NOT NULL,
    "BranchId" UUID NOT NULL,
    "CreatedAt" TIMESTAMPTZ(6) NOT NULL,
    "UpdatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "PK_Tables" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Reviews" (
    "Id" UUID NOT NULL,
    "ContactId" UUID NOT NULL,
    "Rating" INTEGER NOT NULL,
    "Comment" TEXT,
    "Response" TEXT,
    "ResponderId" UUID,
    "CreatedAt" TIMESTAMPTZ(6) NOT NULL,
    "UpdatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "PK_Reviews" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "Id" UUID NOT NULL,
    "Name" VARCHAR(100) NOT NULL,
    "CreatedAt" TIMESTAMPTZ(6) NOT NULL,
    "UpdatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "PK_Categories" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "MenuItems" (
    "Id" UUID NOT NULL,
    "Name" VARCHAR(100) NOT NULL,
    "Description" TEXT,
    "Price" DECIMAL(18,2) NOT NULL,
    "CategoryId" UUID NOT NULL,
    "IsAvailable" BOOLEAN NOT NULL,
    "CreatedAt" TIMESTAMPTZ(6) NOT NULL,
    "UpdatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "PK_MenuItems" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Pipelines" (
    "Id" UUID NOT NULL,
    "Name" VARCHAR(100) NOT NULL,

    CONSTRAINT "PK_Pipelines" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Stages" (
    "Id" UUID NOT NULL,
    "Name" VARCHAR(100) NOT NULL,
    "Order" INTEGER NOT NULL,
    "PipelineId" UUID NOT NULL,

    CONSTRAINT "PK_Stages" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Deals" (
    "Id" UUID NOT NULL,
    "Title" VARCHAR(200) NOT NULL,
    "Description" TEXT,
    "Value" DECIMAL NOT NULL,
    "ContactId" UUID NOT NULL,
    "StageId" UUID NOT NULL,
    "CreatedAt" TIMESTAMPTZ(6) NOT NULL,
    "UpdatedAt" TIMESTAMPTZ(6) NOT NULL,
    "UserId" UUID,

    CONSTRAINT "PK_Deals" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "Id" UUID NOT NULL,
    "CustomerName" VARCHAR(100) NOT NULL,
    "Phone" VARCHAR(20) NOT NULL,
    "Comment" TEXT,
    "Status" VARCHAR(20) NOT NULL,
    "TotalPrice" DECIMAL(18,2) NOT NULL,
    "TableId" UUID,
    "CreatedAt" TIMESTAMPTZ(6) NOT NULL,
    "UpdatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "PK_Orders" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "OrderItems" (
    "Id" UUID NOT NULL,
    "OrderId" UUID NOT NULL,
    "MenuItemId" UUID NOT NULL,
    "Quantity" INTEGER NOT NULL,
    "Price" DECIMAL(18,2) NOT NULL,

    CONSTRAINT "PK_OrderItems" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "__EFMigrationsHistory" (
    "MigrationId" VARCHAR(150) NOT NULL,
    "ProductVersion" VARCHAR(32) NOT NULL,

    CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY ("MigrationId")
);

-- CreateIndex
CREATE INDEX "IX_Users_BranchId" ON "Users"("BranchId");

-- CreateIndex
CREATE UNIQUE INDEX "IX_Roles_Name" ON "Roles"("Name");

-- CreateIndex
CREATE UNIQUE INDEX "IX_Permissions_Name" ON "Permissions"("Name");

-- CreateIndex
CREATE INDEX "IX_UserRoles_RoleId" ON "UserRoles"("RoleId");

-- CreateIndex
CREATE INDEX "IX_RolePermissions_PermissionId" ON "RolePermissions"("PermissionId");

-- CreateIndex
CREATE INDEX "IX_Contacts_UserId" ON "Contacts"("UserId");

-- CreateIndex
CREATE INDEX "IX_Reservations_ContactId" ON "Reservations"("ContactId");

-- CreateIndex
CREATE INDEX "IX_Reservations_TableId" ON "Reservations"("TableId");

-- CreateIndex
CREATE INDEX "IX_Reservations_UserId" ON "Reservations"("UserId");

-- CreateIndex
CREATE INDEX "IX_Tables_BranchId" ON "Tables"("BranchId");

-- CreateIndex
CREATE INDEX "IX_Reviews_ContactId" ON "Reviews"("ContactId");

-- CreateIndex
CREATE INDEX "IX_Reviews_ResponderId" ON "Reviews"("ResponderId");

-- CreateIndex
CREATE INDEX "IX_MenuItems_CategoryId" ON "MenuItems"("CategoryId");

-- CreateIndex
CREATE INDEX "IX_Stages_PipelineId" ON "Stages"("PipelineId");

-- CreateIndex
CREATE INDEX "IX_Deals_ContactId" ON "Deals"("ContactId");

-- CreateIndex
CREATE INDEX "IX_Deals_StageId" ON "Deals"("StageId");

-- CreateIndex
CREATE INDEX "IX_Deals_UserId" ON "Deals"("UserId");

-- CreateIndex
CREATE INDEX "IX_Orders_TableId" ON "Orders"("TableId");

-- CreateIndex
CREATE INDEX "IX_OrderItems_MenuItemId" ON "OrderItems"("MenuItemId");

-- CreateIndex
CREATE INDEX "IX_OrderItems_OrderId" ON "OrderItems"("OrderId");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "FK_Users_Branches_BranchId" FOREIGN KEY ("BranchId") REFERENCES "Branches"("Id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UserRoles" ADD CONSTRAINT "FK_UserRoles_Roles_RoleId" FOREIGN KEY ("RoleId") REFERENCES "Roles"("Id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UserRoles" ADD CONSTRAINT "FK_UserRoles_Users_UserId" FOREIGN KEY ("UserId") REFERENCES "Users"("Id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "RolePermissions" ADD CONSTRAINT "FK_RolePermissions_Permissions_PermissionId" FOREIGN KEY ("PermissionId") REFERENCES "Permissions"("Id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "RolePermissions" ADD CONSTRAINT "FK_RolePermissions_Roles_RoleId" FOREIGN KEY ("RoleId") REFERENCES "Roles"("Id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Contacts" ADD CONSTRAINT "FK_Contacts_Users_UserId" FOREIGN KEY ("UserId") REFERENCES "Users"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Reservations" ADD CONSTRAINT "FK_Reservations_Contacts_ContactId" FOREIGN KEY ("ContactId") REFERENCES "Contacts"("Id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Reservations" ADD CONSTRAINT "FK_Reservations_Tables_TableId" FOREIGN KEY ("TableId") REFERENCES "Tables"("Id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Reservations" ADD CONSTRAINT "FK_Reservations_Users_UserId" FOREIGN KEY ("UserId") REFERENCES "Users"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Tables" ADD CONSTRAINT "FK_Tables_Branches_BranchId" FOREIGN KEY ("BranchId") REFERENCES "Branches"("Id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "FK_Reviews_Contacts_ContactId" FOREIGN KEY ("ContactId") REFERENCES "Contacts"("Id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "FK_Reviews_Users_ResponderId" FOREIGN KEY ("ResponderId") REFERENCES "Users"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MenuItems" ADD CONSTRAINT "FK_MenuItems_Categories_CategoryId" FOREIGN KEY ("CategoryId") REFERENCES "Categories"("Id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Stages" ADD CONSTRAINT "FK_Stages_Pipelines_PipelineId" FOREIGN KEY ("PipelineId") REFERENCES "Pipelines"("Id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Deals" ADD CONSTRAINT "FK_Deals_Contacts_ContactId" FOREIGN KEY ("ContactId") REFERENCES "Contacts"("Id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Deals" ADD CONSTRAINT "FK_Deals_Stages_StageId" FOREIGN KEY ("StageId") REFERENCES "Stages"("Id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Deals" ADD CONSTRAINT "FK_Deals_Users_UserId" FOREIGN KEY ("UserId") REFERENCES "Users"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "FK_Orders_Tables_TableId" FOREIGN KEY ("TableId") REFERENCES "Tables"("Id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "OrderItems" ADD CONSTRAINT "FK_OrderItems_MenuItems_MenuItemId" FOREIGN KEY ("MenuItemId") REFERENCES "MenuItems"("Id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "OrderItems" ADD CONSTRAINT "FK_OrderItems_Orders_OrderId" FOREIGN KEY ("OrderId") REFERENCES "Orders"("Id") ON DELETE CASCADE ON UPDATE NO ACTION;

