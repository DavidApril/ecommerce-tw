'use client';
import { Loader } from '@/components';
import { useAddressStore, useCartStore } from '@/store';
import { currencyFormat } from '@/utils';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const OrderSummary = () => {
  const [loaded, setLoaded] = useState<boolean>(false);

  const { itemsInCart, subTotal, tax, total } = useCartStore((state) =>
    state.getSummaryInformation(),
  );

  const address = useAddressStore((state) => state.address);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return <Loader />;

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
        Order summary
      </h2>

      <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-900">
            Address information
          </dt>
        </div>
        <div className="flex justify-between">
          <dt>Name</dt>
          <dd className="text-gray-900">{address.name}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Address</dt>
          <dd className="text-gray-900">{`${address.address + ' / ' + (address.address2 ?? address.address2)}`}</dd>
        </div>
        <div className="flex justify-between">
          <dt>City</dt>
          <dd className="text-gray-900">{address.city}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Country</dt>
          <dd className="text-gray-900">{address.country}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Postal code</dt>
          <dd className="text-gray-900">{address.postalCode}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Phone</dt>
          <dd className="text-gray-900">{address.phone}</dd>
        </div>
      </dl>

      <dl className="mt-6 space-y-4">
      <div className="flex items-center justify-between  border-t border-gray-200 pt-4">
          <dt className="text-sm text-gray-600">No. Products</dt>
          <dd className="text-sm font-medium text-gray-900">
            {itemsInCart} products
          </dd>
        </div>
        <div className="flex items-center justify-between  border-t border-gray-200 pt-4">
          <dt className="text-sm text-gray-600">Subtotal</dt>
          <dd className="text-sm font-medium text-gray-900">
            ${currencyFormat(subTotal)}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="flex items-center text-sm text-gray-600">
            <span>Shipping estimate</span>
            <a
              href="#"
              className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">
                Learn more about how shipping is calculated
              </span>
              <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </dt>
          <dd className="text-sm font-medium text-gray-900">$5.00</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="flex text-sm text-gray-600">
            <span>Tax estimate</span>
            <a
              href="#"
              className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">
                Learn more about how tax is calculated
              </span>
              <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </dt>
          <dd className="text-sm font-medium text-gray-900">
            ${currencyFormat(tax)}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-900">Order total</dt>
          <dd className="text-base font-medium text-gray-900">
            ${currencyFormat(total)}
          </dd>
        </div>
      </dl>

      <div className="mt-6">
        <Link href="/checkout">
          <button
            type="submit"
            className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
          >
            Checkout
          </button>
        </Link>
      </div>
    </section>
  );
};
