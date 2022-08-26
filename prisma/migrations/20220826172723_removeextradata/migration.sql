/*
  Warnings:

  - You are about to drop the column `day` on the `crons` table. All the data in the column will be lost.
  - You are about to drop the column `hour` on the `crons` table. All the data in the column will be lost.
  - You are about to drop the column `lastTrigger` on the `crons` table. All the data in the column will be lost.
  - You are about to drop the column `minute` on the `crons` table. All the data in the column will be lost.
  - You are about to drop the column `nextTrigger` on the `crons` table. All the data in the column will be lost.
  - You are about to drop the column `repeat` on the `crons` table. All the data in the column will be lost.
  - You are about to drop the column `second` on the `crons` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `crons` DROP COLUMN `day`,
    DROP COLUMN `hour`,
    DROP COLUMN `lastTrigger`,
    DROP COLUMN `minute`,
    DROP COLUMN `nextTrigger`,
    DROP COLUMN `repeat`,
    DROP COLUMN `second`,
    ADD COLUMN `cronExpression` VARCHAR(20) NULL;
