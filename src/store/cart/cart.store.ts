import { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";


interface State {
    cart: CartProduct[];

    addProductToCart: (product: CartProduct) => void
}

export const useCartStore = create<State>()(
    persist(
        (set, get) => ({
            cart: [],
            addProductToCart: (product: CartProduct) => {
                const { cart } = get()
                const productInCart = cart.some(
                    (item) => item.id === product.id && item.color.name === product.color.name
                )

                if (!productInCart) {
                    set({ cart: [...cart, product] })
                    return;
                }

                const updatedCartProducts = cart.map((item) => {
                    if (item.id === product.id && item.color.name === product.color.name) {
                        return { ...item, quantity: item.quantity + product.quantity }
                    }
                    return item;
                })
                set({ cart: updatedCartProducts })
            }
        }),
        {
            name: 'shopping-cart'
        }
    )
)