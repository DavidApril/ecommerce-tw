import { classNames } from '@/utils';
import { Switch } from '@headlessui/react';
import { BreadCrumbles } from '../ui/bread-crumbles';
import { AddressForm } from './ui/address-form';
import { OrderSummary } from './ui/order-summary';

export default function AddressPage() {
  return (
    <div className="bg-white">
      {/* Background color split screen for large screens */}
      <div
        className="fixed left-0 top-0 hidden h-full w-1/2 bg-white lg:block"
        aria-hidden="true"
      />
      <div
        className="fixed right-0 top-0 hidden h-full w-1/2 bg-gray-50 lg:block"
        aria-hidden="true"
      />
      <BreadCrumbles />

      <main className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 xl:gap-x-48">
        <h1 className="sr-only">Order information</h1>

        <OrderSummary />

     <AddressForm/>
      </main>
    </div>
  );
}
