/*
  Warnings:

  - You are about to drop the column `pseudo` on the `user` table. All the data in the column will be lost.
  - You are about to alter the column `password` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `firstName` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `lastName` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `grade` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `pseudo`,
    MODIFY `password` VARCHAR(50) NOT NULL,
    MODIFY `firstName` VARCHAR(50) NOT NULL DEFAULT '',
    MODIFY `lastName` VARCHAR(50) NOT NULL DEFAULT '',
    MODIFY `grade` VARCHAR(100) NOT NULL DEFAULT '';
