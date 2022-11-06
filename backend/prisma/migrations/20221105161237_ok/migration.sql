/*
  Warnings:

  - You are about to alter the column `email` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(140)`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `email` VARCHAR(140) NOT NULL,
    MODIFY `pseudo` VARCHAR(255) NOT NULL DEFAULT '',
    MODIFY `firstName` VARCHAR(255) NOT NULL DEFAULT '',
    MODIFY `lastName` VARCHAR(255) NOT NULL DEFAULT '',
    MODIFY `grade` VARCHAR(255) NOT NULL DEFAULT '',
    MODIFY `imageProfile` VARCHAR(255) NOT NULL DEFAULT '';
