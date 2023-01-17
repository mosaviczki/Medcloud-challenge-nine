/*
  Warnings:

  - You are about to drop the column `image` on the `patients` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `patients` DROP COLUMN `image`,
    MODIFY `numberAdress` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `image`;
