-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `roules` ENUM('root', 'master', 'admin', 'user') NOT NULL DEFAULT 'master',
    `full_name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `cover_image` VARCHAR(191) NOT NULL,
    `actived_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `companies` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `user_id` VARCHAR(191) NULL,
    `company` VARCHAR(191) NOT NULL,
    `fantasy` VARCHAR(191) NOT NULL,
    `phones` VARCHAR(191) NOT NULL,
    `reason` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(20) NOT NULL,
    `cnpj` VARCHAR(20) NOT NULL,
    `ie` VARCHAR(20) NOT NULL,
    `address` VARCHAR(45) NOT NULL,
    `neighborhood` VARCHAR(20) NOT NULL,
    `complement` VARCHAR(65) NOT NULL,
    `city` VARCHAR(40) NOT NULL,
    `state` VARCHAR(2) NOT NULL,
    `zip_code` VARCHAR(9) NOT NULL,
    `logo_image` VARCHAR(191) NOT NULL,

    INDEX `companies_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employees` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `company_id` VARCHAR(191) NULL,
    `full_name` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(20) NOT NULL,
    `email` VARCHAR(20) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `zip_code` VARCHAR(191) NOT NULL,
    `cover_image` VARCHAR(191) NULL,

    INDEX `employees_company_id_idx`(`company_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customers` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `full_name` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(20) NOT NULL,
    `email` VARCHAR(20) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `zip_code` VARCHAR(191) NOT NULL,
    `cover_image` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `company_id` VARCHAR(191) NULL,
    `employer_id` VARCHAR(191) NULL,
    `customer_id` VARCHAR(191) NULL,
    `room_id` VARCHAR(191) NULL,
    `code` VARCHAR(20) NULL,

    INDEX `orders_company_id_idx`(`company_id`),
    INDEX `orders_employer_id_idx`(`employer_id`),
    INDEX `orders_customer_id_idx`(`customer_id`),
    INDEX `orders_room_id_idx`(`room_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders_items` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `order_id` VARCHAR(191) NULL,
    `service_id` VARCHAR(191) NULL,
    `product_id` VARCHAR(191) NULL,
    `start_of_service` DATETIME(3) NULL,
    `end_of_service` DATETIME(3) NULL,
    `quantity` INTEGER NOT NULL DEFAULT 0,
    `cost_price` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `sale_price` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,

    INDEX `orders_items_order_id_idx`(`order_id`),
    INDEX `orders_items_service_id_idx`(`service_id`),
    INDEX `orders_items_product_id_idx`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders_payments` (
    `id` VARCHAR(191) NOT NULL,
    `order_id` VARCHAR(191) NULL,
    `payment_id` VARCHAR(191) NULL,
    `price` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `discount` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `discount_type` ENUM('money', 'porcentage') NOT NULL DEFAULT 'porcentage',

    INDEX `orders_payments_order_id_idx`(`order_id`),
    INDEX `orders_payments_payment_id_idx`(`payment_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payments` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `company_id` VARCHAR(191) NULL,
    `payment` VARCHAR(191) NOT NULL,
    `discount` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `discount_type` ENUM('money', 'porcentage') NOT NULL DEFAULT 'porcentage',
    `position` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rooms` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `company_id` VARCHAR(191) NULL,
    `room` INTEGER NOT NULL DEFAULT 0,
    `name` VARCHAR(191) NOT NULL,

    INDEX `rooms_company_id_idx`(`company_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `services` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `company_id` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `cost_price` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `sale_price` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,

    INDEX `services_company_id_idx`(`company_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `company_id` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,

    INDEX `categories_company_id_idx`(`company_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subcategories` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `company_id` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,

    INDEX `subcategories_company_id_idx`(`company_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `company_id` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `stock` INTEGER NOT NULL DEFAULT 0,
    `cost_price` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `sale_price` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `profit` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `profit_type` ENUM('money', 'porcentage') NOT NULL DEFAULT 'porcentage',

    INDEX `products_company_id_idx`(`company_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stocks` (
    `created_at` DATETIME(3) NOT NULL,
    `user_id` VARCHAR(191) NULL,
    `product_id` VARCHAR(191) NULL,
    `stock` INTEGER NOT NULL DEFAULT 0,
    `stock_in` INTEGER NOT NULL DEFAULT 0,

    INDEX `stocks_product_id_idx`(`product_id`),
    INDEX `stocks_user_id_idx`(`user_id`),
    PRIMARY KEY (`created_at`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stocks_transfer` (
    `created_at` DATETIME(3) NOT NULL,
    `user_id` VARCHAR(191) NULL,
    `company_id` VARCHAR(191) NULL,
    `company_to_id` VARCHAR(191) NULL,
    `product_id` VARCHAR(191) NULL,
    `product_to_id` VARCHAR(191) NULL,
    `stock` INTEGER NOT NULL DEFAULT 0,
    `stock_to` INTEGER NOT NULL DEFAULT 0,

    INDEX `stocks_transfer_user_id_idx`(`user_id`),
    INDEX `stocks_transfer_product_id_idx`(`product_id`),
    INDEX `stocks_transfer_product_to_id_idx`(`product_to_id`),
    INDEX `stocks_transfer_company_id_idx`(`company_id`),
    INDEX `stocks_transfer_company_to_id_idx`(`company_to_id`),
    PRIMARY KEY (`created_at`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bleeding` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `company_id` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bleeding_group` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `company_id` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bleeding_subgroup` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `company_id` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bills_pay` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `company_id` VARCHAR(191) NULL,
    `supplier_id` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `date_pay` DATETIME(3) NULL,
    `price` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bills_recived` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `company_id` VARCHAR(191) NULL,
    `order_id` VARCHAR(191) NULL,
    `date_pay` DATETIME(3) NULL,
    `price` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bills_recived_payments` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `bills_recived_id` VARCHAR(191) NULL,
    `payment_id` VARCHAR(191) NULL,
    `price` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `register_box` (
    `id` VARCHAR(191) NOT NULL,
    `company_id` VARCHAR(191) NULL,
    `employeer_open` VARCHAR(191) NULL,
    `employeer_closed` VARCHAR(191) NULL,
    `employeer_del` VARCHAR(191) NULL,
    `open_balance` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `register_history` (
    `id` VARCHAR(191) NOT NULL,
    `register_box_id` VARCHAR(191) NULL,
    `payment_id` VARCHAR(191) NULL,
    `amount` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `amount_digit` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `supplers` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `company_id` VARCHAR(191) NULL,
    `company` VARCHAR(191) NOT NULL,
    `fantasy` VARCHAR(191) NOT NULL,
    `phones` VARCHAR(191) NOT NULL,
    `reason` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(20) NOT NULL,
    `cnpj` VARCHAR(20) NOT NULL,
    `ie` VARCHAR(20) NOT NULL,
    `address` VARCHAR(45) NOT NULL,
    `neighborhood` VARCHAR(20) NOT NULL,
    `complement` VARCHAR(65) NOT NULL,
    `city` VARCHAR(40) NOT NULL,
    `state` VARCHAR(2) NOT NULL,
    `zip_code` VARCHAR(9) NOT NULL,

    INDEX `supplers_company_id_idx`(`company_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Financial` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `company_id` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
