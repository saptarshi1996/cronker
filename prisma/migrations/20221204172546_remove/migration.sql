/*
  Warnings:

  - You are about to drop the column `created_at` on the `cron_logs` table. All the data in the column will be lost.
  - You are about to drop the column `cron_id` on the `cron_logs` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `cron_logs` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `cron_logs` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `crons` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `crons` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `crons` table. All the data in the column will be lost.
  - Added the required column `cronId` to the `cron_logs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `cron_logs` DROP FOREIGN KEY `cron_logs_cron_id_fkey`;

-- AlterTable
ALTER TABLE `cron_logs` DROP COLUMN `created_at`,
    DROP COLUMN `cron_id`,
    DROP COLUMN `deleted_at`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `cronId` INTEGER NOT NULL,
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `crons` DROP COLUMN `created_at`,
    DROP COLUMN `deleted_at`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `requestHeaders` TEXT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NULL;

-- AddForeignKey
ALTER TABLE `cron_logs` ADD CONSTRAINT `cron_logs_cronId_fkey` FOREIGN KEY (`cronId`) REFERENCES `crons`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
