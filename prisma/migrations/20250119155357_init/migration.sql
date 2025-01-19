/*
  Warnings:

  - You are about to drop the column `make` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the column `plateNumber` on the `Vehicle` table. All the data in the column will be lost.
  - Added the required column `type` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Vehicle` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "make",
DROP COLUMN "model",
DROP COLUMN "plateNumber",
ADD COLUMN     "type" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL;
