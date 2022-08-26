/*
  Warnings:

  - You are about to alter the column `day` on the `crons` table. The data in that column could be lost. The data in that column will be cast from `Enum("crons_day")` to `Enum("crons_day")`.
  - Added the required column `repeat` to the `crons` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `crons` ADD COLUMN `repeat` ENUM('DAY', 'HOUR', 'MINUTE', 'SECOND') NOT NULL,
    MODIFY `day` ENUM('EVERYDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY') NULL,
    MODIFY `hour` VARCHAR(2) NULL DEFAULT '00',
    MODIFY `minute` VARCHAR(2) NULL DEFAULT '00',
    MODIFY `second` VARCHAR(2) NULL DEFAULT '00';
