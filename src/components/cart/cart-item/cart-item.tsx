'use client'
import { useEffect, useState } from "react";
import { Loader, QuantitySelector } from "@/components";
import { Product } from "@/interfaces"
import { useCartStore } from "@/store";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
  productIdx: number;
}

export const CartItems = () => {

  const [loaded, setLoaded] = useState<boolean>(false)
  const productsInCart = useCartStore(state => state.cart)

  useEffect(() => {
    setLoaded(true)
  })

  if (!loaded) {
    return <Loader/>
  }


  return (
    <>
      {productsInCart.map((product, productIdx) => (
        <li key={`${ product.slug } - ${ product.color }`} className="flex py-6 sm:py-10">
          <div className="flex-shrink-0">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              style={{
                width: '200px',
                height: '200px'
              }}
              className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-sm">
                    <Link href={`/product/${product.slug}`} className="font-medium text-gray-700 hover:text-gray-800">
                      {product.title}
                    </Link>
                  </h3>
                </div>
                <div className="mt-1 flex text-sm">
                  <p className="text-gray-500">{product.color.name}</p>
                  {/* {product.sizes ? (
                    <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{product.size}</p>
                  ) : null} */}
                </div>
                <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
              </div>

            </div>
            {/* <p className="mt-4 flex space-x-2 text-sm text-gray-700">
          {!product.inStock ? (
          <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
          ) : (
            <ClockIcon className="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
            )}
            
            <span>{product.inStock ? 'In stock' : `Ships in ${product.leadTime}`}</span>
          </p> */}
            {/* <QuantitySelector quantity={3} onQuantityChanged={value => console.log(value)} /> */}
          </div>
        </li>
      ))}

    </>
  )
}
