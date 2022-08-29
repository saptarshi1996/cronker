-- CreateTable
CREATE TABLE `cron_logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `response` TEXT NOT NULL,
    `statusCode` INTEGER NOT NULL,
    `status` ENUM('SUCCESS', 'FAILED') NOT NULL,
    `started` DATETIME(3) NOT NULL,
    `completed` DATETIME(3) NOT NULL,
    `cronId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cron_logs` ADD CONSTRAINT `cron_logs_cronId_fkey` FOREIGN KEY (`cronId`) REFERENCES `crons`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
