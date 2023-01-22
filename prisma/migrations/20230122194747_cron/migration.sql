-- CreateTable
CREATE TABLE `Cron` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `url` TEXT NOT NULL,
    `cron_expression` TEXT NOT NULL,
    `method` VARCHAR(10) NOT NULL,
    `payload` TEXT NOT NULL,
    `headers` TEXT NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `Cron_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
