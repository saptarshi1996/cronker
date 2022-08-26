-- CreateTable
CREATE TABLE `crons` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `day` ENUM('EVERY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY') NOT NULL,
    `hour` VARCHAR(2) NOT NULL DEFAULT '00',
    `minute` VARCHAR(2) NOT NULL DEFAULT '00',
    `second` VARCHAR(2) NOT NULL DEFAULT '00',
    `requestMethod` ENUM('POST', 'GET') NOT NULL DEFAULT 'GET',
    `requestUrl` TEXT NOT NULL,
    `requestPayload` TEXT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
