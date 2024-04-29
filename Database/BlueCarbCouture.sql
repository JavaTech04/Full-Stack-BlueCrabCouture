CREATE DATABASE [BlueCrabCouture]
GO
USE [BlueCrabCouture]
GO
CREATE TABLE [UserRole](
	[id] INT IDENTITY PRIMARY KEY NOT NULL,
	[role_name] NVARCHAR(20) UNIQUE NOT NULL,
	[create_date] DATE DEFAULT GETDATE() NULL
)
GO
CREATE TABLE [UserAccount](
	[id] INT IDENTITY PRIMARY KEY NOT NULL,
	[phone_number] NVARCHAR(13) UNIQUE NOT NULL,
	[email] NVARCHAR(100) UNIQUE NOT NULL,
	[password] NVARCHAR(50) NOT NULL,
	[id_user_role] INT FOREIGN KEY REFERENCES[UserRole](id) NOT NULL,
	[is_locked] BIT DEFAULT 0 NOT NULL,
	[create_date] DATE DEFAULT GETDATE() NULL
)
GO
CREATE TABLE [UserAddress](
	[id] INT IDENTITY PRIMARY KEY,
	[city] NVARCHAR(50) NOT NULL,
	[district] NVARCHAR(50) NOT NULL,
	[specific_information] NVARCHAR(255) NOT NULL
)
GO
CREATE TABLE [UserAccountDetail](
	[id] INT IDENTITY PRIMARY KEY NOT NULL,
	[name] NVARCHAR(50) NULL,
	[gender] BIT DEFAULT 0,
	[date_of_birth] DATE NULL,
	[avatar] NVARCHAR(255) NULL,
	[id_user_account] INT FOREIGN KEY REFERENCES[UserAccount](id) UNIQUE NULL,
	[id_user_address] INT FOREIGN KEY REFERENCES[UserAddress](id) UNIQUE NULL,
	[last_edited] DATE DEFAULT GETDATE() NULL
)
GO
CREATE TABLE [Category](
	[id] INT IDENTITY PRIMARY KEY NOT NULL,
	[url_logo] NVARCHAR(255),
	[name] NVARCHAR(50) NOT NULL UNIQUE,
	[create_date] DATE DEFAULT GETDATE()
)
GO
CREATE TABLE [Brand](
	[id] INT IDENTITY PRIMARY KEY NOT NULL,
	[url_logo] NVARCHAR(255),
	[name] NVARCHAR(50) NOT NULL UNIQUE,
	[create_date] DATE DEFAULT GETDATE() NULL
)
GO
CREATE TABLE [Color](
	[id] INT IDENTITY PRIMARY KEY NOT NULL,
	[color_code] NVARCHAR(20) NOT NULL,
	[name] NVARCHAR(20) UNIQUE NOT NULL,
	[create_date] DATE DEFAULT GETDATE() NULL
)
GO
CREATE TABLE [Size](
	[id] INT IDENTITY PRIMARY KEY NOT NULL,
	[name] NVARCHAR(20) UNIQUE NOT NULL,
	[create_date] DATE DEFAULT GETDATE() NULL
)
GO
CREATE TABLE [Image](
	[id] INT IDENTITY PRIMARY KEY NOT NULL,
	[url] NVARCHAR(100) UNIQUE NOT NULL,
	[create_date] DATE DEFAULT GETDATE() NULL
)
GO
CREATE TABLE [Product](
	[id] INT IDENTITY PRIMARY KEY NOT NULL,
	[code] NVARCHAR(255) NULL,
	[name] NVARCHAR(255) NOT NULL,
	[sold] INT DEFAULT 0 NULL,
	[id_image] INT FOREIGN KEY REFERENCES[Image](id) NULL,
	[is_deleted] BIT DEFAULT 0,
	[id_user_account] INT FOREIGN KEY REFERENCES[UserAccount](id) NOT NULL,
	[create_date] DATE DEFAULT GETDATE() NULL
)
GO
CREATE TABLE [ProductDetail](
	[id] INT IDENTITY PRIMARY KEY NOT NULL,
	[id_category] INT FOREIGN KEY REFERENCES[Category](id) NOT NULL,
	[id_brand] INT FOREIGN KEY REFERENCES[Brand](id) NOT NULL,
	[id_color] INT FOREIGN KEY REFERENCES[Color](id) NOT NULL,
	[id_size] INT FOREIGN KEY REFERENCES[Size](id) NOT NULL,
	[id_product] INT FOREIGN KEY REFERENCES[Product](id) NOT NULL,
	[price] DECIMAL(10, 2) CONSTRAINT check_price CHECK([price] > 10) NOT NULL,
	[quantity] INT DEFAULT 0 NULL,
	[create_date] DATE DEFAULT GETDATE() NOT NULL
)
GO
CREATE TABLE [ShoppingCart](
	[id] INT IDENTITY PRIMARY KEY NOT NULL,
	[id_user] INT FOREIGN KEY REFERENCES[UserAccount](id) NOT NULL,
	[quantity_product] INT DEFAULT 0,
	[total_money] DECIMAL(10, 2) DEFAULT 0
)
GO
CREATE TABLE [ShoppingCartDetail](
	[id] INT IDENTITY PRIMARY KEY NOT NULL,
	[price] DECIMAL(10, 2) NULL,
	[quantity] INT CONSTRAINT check_quantity CHECK ([quantity] > 1),
	[id_shopping_cart] INT FOREIGN KEY REFERENCES[ShoppingCart](id) NOT NULL,
	[id_product_detail] INT FOREIGN KEY REFERENCES[ProductDetail](id) NOT NULL,
	[add_date] DATE DEFAULT GETDATE() NULL,
	[last_edited] DATE DEFAULT GETDATE() NULL
)
GO
CREATE TABLE [InvoiceStatus](
	[id] INT IDENTITY PRIMARY KEY NOT NULL,
	[name] NVARCHAR(50) UNIQUE NOT NULL
)
GO
CREATE TABLE [Orders](
	[id] INT IDENTITY PRIMARY KEY NOT NULL,
	[code_order] NVARCHAR(50) UNIQUE NOT NULL,
	[id_user_account] INT FOREIGN KEY REFERENCES[UserAccount](id) NOT NULL,
	[id_status_invoice] INT FOREIGN KEY REFERENCES[InvoiceStatus](id) NOT NULL,
	[total_money] DECIMAL(10, 2) DEFAULT 0,
	[quantity_product] INT DEFAULT 0,
	[create_date] DATE DEFAULT GETDATE() NULL
)
GO
CREATE TABLE [OrderItems](
	[id] INT IDENTITY PRIMARY KEY NOT NULL,
	[id_order] INT FOREIGN KEY REFERENCES[Orders](id) NOT NULL,
	[price] DECIMAL(10, 2) NOT NULL,
	[quantity] INT CONSTRAINT check_quantity_item CHECK ([quantity] > 1),
	[id_product_detail] INT FOREIGN KEY REFERENCES[ProductDetail](id)  NOT NULL,
	[add_date] DATE DEFAULT GETDATE() NULL,
	[last_edited] DATE DEFAULT GETDATE() NULL
)

SELECT UserAccountDetail.name, UserAccount.phone_number, UserAccount.email, UserAccount.password, UserRole.role_name, UserAccountDetail.gender,
UserAccountDetail.date_of_birth, UserAddress.city, UserAddress.district, UserAddress.specific_information, UserAccount.is_locked
FROM UserAccount 
INNER JOIN UserRole
ON UserAccount.id_user_role = UserRole.id
INNER JOIN UserAccountDetail
ON UserAccount.id = UserAccountDetail.id_user_account
INNER JOIN UserAddress
ON UserAccountDetail.id_user_address = UserAddress.id