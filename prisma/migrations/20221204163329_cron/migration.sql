-- CreateTable
CREATE TABLE `crons` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `cronExpression` VARCHAR(20) NULL,
    `requestMethod` ENUM('GET', 'POST', 'PATCH', 'PUT', 'DELETE') NOT NULL DEFAULT 'GET',
    `requestUrl` TEXT NOT NULL,
    `requestPayload` TEXT NULL,
    `isActive` BOOLEAN NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cron_logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `response` TEXT NOT NULL,
    `status` ENUM('SUCCESS', 'FAILED') NOT NULL,
    `startedAt` DATETIME(3) NOT NULL,
    `completedAt` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,
    `cron_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cron_logs` ADD CONSTRAINT `cron_logs_cron_id_fkey` FOREIGN KEY (`cron_id`) REFERENCES `crons`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
