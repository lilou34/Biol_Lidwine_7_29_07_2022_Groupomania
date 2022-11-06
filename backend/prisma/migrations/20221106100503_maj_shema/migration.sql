-- AlterTable
ALTER TABLE `comment` MODIFY `content` TEXT NOT NULL,
    MODIFY `image` VARCHAR(255) NULL,
    MODIFY `altText` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `post` MODIFY `content` VARCHAR(255) NULL,
    MODIFY `image` VARCHAR(255) NULL,
    MODIFY `altText` VARCHAR(255) NULL;
