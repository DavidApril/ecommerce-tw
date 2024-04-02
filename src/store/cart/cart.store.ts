import { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";


interface State {
    cart: CartProduct[];

    getTotalItems: () => number
    addProductToCart: (product: CartProduct) => void
    updateProductQuantity: (product: CartProduct, quantity:number) => void
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
            },
            getTotalItems: () => {
                const { cart } = get();
                return cart.reduce( (total, item) => total + item.quantity, 0 )
            },
            updateProductQuantity: ( product, quantity ) => {
                const { cart } = get()
                const updateCartProducts = cart.map( item => {
                    if( item.id === product.id && item.color === product.color){
                        return { ...item, quantity: quantity}
                    }
                    return item
                })
                set({ cart: updateCartProducts})
            } 
        }),
        {
            name: 'shopping-cart'
        }
    )
)