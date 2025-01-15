/*
  Warnings:

  - Added the required column `address` to the `CustomerModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CustomerModel" ADD COLUMN     "address" TEXT NOT NULL;
