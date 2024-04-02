import { AlsoBought, CartItems } from '@/components'
import { relatedProducts } from '@/seed/seed'
import { QuestionMarkCircleIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'
import { OrderSummary } from './ui/order-summary/order-sumary'


export default function CartPage() {

  return (
    <div className="bg-white">
      <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
                <CartItems />
            </ul>
          </section>

          {/* Order summary */}
   <OrderSummary/>
        </div>

        {/* Related products */}
        <AlsoBought relatedProducts={relatedProducts}/>
      </main>

    </div>
  )
}
