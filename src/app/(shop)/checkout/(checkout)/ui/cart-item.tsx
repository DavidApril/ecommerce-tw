'use client'
import { useEffect, useState } from "react";
import { Loader } from "@/components";
import { useCartStore } from "@/store";
import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import { currencyFormat } from "@/utils";

export const CartItems = () => {

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
        <li key={product.id} className="flex cursor-default py-6">
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
                  <span className="cursor-default font-medium text-gray-700">
                    {product.title}
                  </span>
                </h4>
                <p className="ml-4 text-sm font-medium text-gray-900">{currencyFormat(product.price * product.quantity)}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{product.color.name}</p>
              {/* <p className="mt-1 text-sm text-gray-500">{product.size}</p> */}
            </div>

            <div className="mt-4 flex flex-1 items-end justify-between">
              <p className="flex items-center space-x-2 text-sm text-gray-700">
                {!product.inStock ? (
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                ) : (
                  <ClockIcon className="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
                )}

                <span>{!product.inStock ? 'In stock' : `Will ship in ${product.leadTime}`}</span>
              </p>
            </div>
          </div>
        </li>
      ))}

    </>
  )
}
