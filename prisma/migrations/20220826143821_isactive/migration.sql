-- AlterTable
ALTER TABLE `crons` ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `lastTrigger` VARCHAR(191) NULL,
    ADD COLUMN `nextTrigger` VARCHAR(191) NULL;
