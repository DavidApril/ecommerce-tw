import { auth } from '@/auth.config';
import { BreadCrumbles } from '../ui/bread-crumbles';
import { AddressForm } from './ui/address-form';
import { OrderSummary } from './ui/order-summary';
import { getCountries, getUserAddress } from '@/actions';
import { Country } from '@/interfaces';

export default async function AddressPage() {
  const session = await auth(); 
  const countries: Country[] = await getCountries();

  if( !session?.user ){
    return (
      <h1>Error</h1>
    )
  }

  const userAddress = await getUserAddress( session.user.id ) ?? undefined;

  return (
    <div className="bg-white">
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

        <AddressForm countries={countries} userStoredAddress={userAddress} />
      </main>
    </div>
  );
}
