/*
  Warnings:

  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_customerId_fkey";

-- DropTable
DROP TABLE "Customer";

-- DropTable
DROP TABLE "Order";

-- CreateTable
CREATE TABLE "CustomerModel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomerModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderModel" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "OrderModel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrderModel" ADD CONSTRAINT "OrderModel_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "CustomerModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
