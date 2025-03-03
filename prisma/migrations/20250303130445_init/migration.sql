/*
  Warnings:

  - Added the required column `vehicleName` to the `OrderModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderModel" ADD COLUMN     "vehicleName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Vehicle" ALTER COLUMN "description" DROP NOT NULL;
