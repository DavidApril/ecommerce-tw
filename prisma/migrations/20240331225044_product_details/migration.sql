-- CreateTable
CREATE TABLE "ProductDetails" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "items" TEXT[],
    "productId" TEXT NOT NULL,

    CONSTRAINT "ProductDetails_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductDetails" ADD CONSTRAINT "ProductDetails_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
