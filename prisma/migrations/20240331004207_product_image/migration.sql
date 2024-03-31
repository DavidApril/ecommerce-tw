/*
  Warnings:

  - Added the required column `options` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "options" TEXT NOT NULL,
ADD COLUMN     "rating" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "ProductImage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT,
    "productId" TEXT NOT NULL,

    CONSTRAINT "ProductImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
