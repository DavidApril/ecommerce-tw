'use client'
import { useEffect, useState } from "react";
import { Loader, QuantitySelector } from "@/components";
import { Product } from "@/interfaces"
import { useCartStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";

interface Props {
  product: Product;
  productIdx: number;
}

export const CartItems = () => {

  const updateProductQuantity = useCartStore(state => state.updateProductQuantity)
  const removeProduct = useCartStore(state => state.removeProduct)

  const [loaded, setLoaded] = useState<boolean>(false)
  const productsInCart = useCartStore(state => state.cart)

  useEffect(() => {
    setLoaded(true)
  })

  if (!loaded) {
    return <Loader />
  }


  return (
    <>
      {productsInCart.map((product) => (
        <li key={product.id} className="flex py-6">
          <div className="flex-shrink-0">
            <img
              src={product.image}
              alt={product.title}
              className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col sm:ml-6">
            <div>
              <div className="flex justify-between">
                <h4 className="text-sm">
                  <a href={`product/${product.slug}`} className="font-medium text-gray-700 hover:text-gray-800">
                    {product.title}
                  </a>
                </h4>
                <p className="ml-4 text-sm font-medium text-gray-900">{product.price}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{product.color.name}</p>
              {/* <p className="mt-1 text-sm text-gray-500">{product.size}</p> */}
            </div>

            <QuantitySelector inStock={product.inStock} onQuantityChanged={(quantity) => updateProductQuantity(product, quantity)} quantity={product.quantity} />

            <div className="mt-4 flex flex-1 items-end justify-between">
              <p className="flex items-center space-x-2 text-sm text-gray-700">
                {!product.inStock ? (
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                ) : (
                  <ClockIcon className="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
                )}

                <span>{!product.inStock ? 'In stock' : `Will ship in ${product.leadTime}`}</span>
              </p>
              <div className="ml-4">
                <button onClick={() => removeProduct(product)} type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  <span>Remove</span>
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}

    </>
  )
}
