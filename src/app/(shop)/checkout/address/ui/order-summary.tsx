'use client';
import { useCartStore } from '@/store';
import { currencyFormat } from '@/utils';
import { Popover, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
export const OrderSummary = () => {
  const products = useCartStore((state) => state.cart);
  const { total, subTotal, tax } = useCartStore((state) =>
    state.getSummaryInformation(),
  );

  return (
    <section
      aria-labelledby="summary-heading"
      className="bg-gray-50 px-4 pb-10 pt-16 sm:px-6 lg:col-start-2 lg:row-start-1 lg:bg-transparent lg:px-0 lg:pb-16"
    >
      <div className="mx-auto max-w-lg lg:max-w-none">
        <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
          Order summary
        </h2>

        <ul
          role="list"
          className="divide-y divide-gray-200 text-sm font-medium text-gray-900"
        >
          {products.map((product) => (
            <li key={product.id} className="flex items-start space-x-4 py-6">
              <img
                src={product.image}
                alt={product.title}
                className="h-20 w-20 flex-none rounded-md object-cover object-center"
              />
              <div className="flex-auto space-y-1">
                <h3>{product.title}</h3>
                <p className="text-gray-500">{product.color.name}</p>
                <p className="text-gray-500">{product.quantity}</p>
              </div>
              <p className="flex-none text-base font-medium">{product.price}</p>
            </li>
          ))}
        </ul>

        <dl className="hidden space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900 lg:block">
          <div className="flex items-center justify-between">
            <dt className="text-gray-600">Subtotal</dt>
            <dd>{currencyFormat(subTotal)}</dd>
          </div>

          {/* 
          <div className="flex items-center justify-between">
            <dt className="text-gray-600">Shipping</dt>
            <dd>$15.00</dd>
          </div> 
          */}

          <div className="flex items-center justify-between">
            <dt className="text-gray-600">Taxes</dt>
            <dd>{currencyFormat(tax)}</dd>
          </div>

          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            <dt className="text-base">Total</dt>
            <dd className="text-base">{currencyFormat(total)}</dd>
          </div>
        </dl>

        <Popover className="fixed inset-x-0 bottom-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
          <div className="relative z-10 border-t border-gray-200 bg-white px-4 sm:px-6">
            <div className="mx-auto max-w-lg">
              <Popover.Button className="flex w-full items-center py-6 font-medium">
                <span className="mr-auto text-base">Total</span>
                <span className="mr-2 text-base">{currencyFormat(total)}</span>
                <ChevronUpIcon
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
          </div>

          <Transition.Root as={Fragment}>
            <div>
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popover.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-y-full"
                enterTo="translate-y-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full"
              >
                <Popover.Panel className="relative bg-white px-4 py-6 sm:px-6">
                  <dl className="mx-auto max-w-lg space-y-6">
                    <div className="flex items-center justify-between">
                      <dt className="text-gray-600">Subtotal</dt>
                      <dd>{currencyFormat(subTotal)}</dd>
                    </div>
                    {/* 
                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Shipping</dt>
                  <dd>$15.00</dd>
                </div> */}

                    <div className="flex items-center justify-between">
                      <dt className="text-gray-600">Taxes</dt>
                      <dd>{currencyFormat(tax)}</dd>
                    </div>
                  </dl>
                </Popover.Panel>
              </Transition.Child>
            </div>
          </Transition.Root>
        </Popover>
      </div>
    </section>
  );
};
