'use client'
import { Color, Product, CartProduct } from "@/interfaces"
import { HeartIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react";
import { ColorSelector, ErrorAlert, QuantitySelector } from "@/components";
import { useCartStore } from "@/store";
import { SuccessNotification } from "@/components";

interface Props {
    product: Product;
}
export const AddToCart = ({ product }: Props) => {

    const addProductToCart = useCartStore(state => state.addProductToCart)

    const [posted, setPosted] = useState<boolean>(false)
    const [selectedColor, setSelectedColor] = useState<Color | undefined>()
    const [quantity, setQuantity] = useState<number>(1)
    const [showNotification, setShowNotification] = useState<boolean>(false)

    const AddToCart = () => {
        setPosted(true)
        if (!selectedColor) return;
        const cartProduct: CartProduct = {
            id: product.id,
            slug: product.slug,
            title: product.title,
            price: product.price,
            inStock: product.inStock,
            quantity: quantity,
            color: selectedColor,
            image: product.images[0].src
        }
        addProductToCart(cartProduct)
        setShowNotification(true)
        setPosted(false)
        setQuantity(1)
        setSelectedColor(undefined)
    }

    useEffect(() => {
        setTimeout(() => setShowNotification(false), 3000)
    }, [showNotification])

    return <>
        <div className="mt-10 grid gap-y-5">
            <SuccessNotification setShow={setShowNotification} show={showNotification} />
            {
                posted && !selectedColor && <ErrorAlert errors={['You must select a color']} />
            }
            <ColorSelector colors={product.colors} selectedColor={selectedColor} onColorChanged={(color: Color) => setSelectedColor(color)} />
            <QuantitySelector inStock={product.inStock} quantity={quantity} onQuantityChanged={(quantity) => setQuantity(quantity)} />

            <div className="flex">
                <button
                    type="submit"
                    onClick={() => AddToCart()}
                    className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                    Add to bag
                </button>

                <button
                    type="button"
                    className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                    <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                    <span className="sr-only">Add to favorites</span>
                </button>
            </div>
        </div>
    </>

}




