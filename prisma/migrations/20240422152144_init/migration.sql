/*
  Warnings:

  - You are about to drop the column `task` on the `Task` table. All the data in the column will be lost.
  - Added the required column `name` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "task",
ADD COLUMN     "name" TEXT NOT NULL;
