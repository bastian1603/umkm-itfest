/*
  Warnings:

  - Added the required column `is_producer` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `is_producer` BOOLEAN NOT NULL;
