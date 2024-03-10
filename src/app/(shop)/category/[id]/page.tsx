'use client'
import { Products, filters } from '@/seed/seed'
import { MobileFilterMenu } from '@/components/ui/mobile-filter/mobile-filter'
import { AsideBar, ProductGridCategories, Title } from '@/components'

interface Props {
  params: {
    id: string
  }
}

export default function ({ params }: Props) {
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <MobileFilterMenu />

        <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
          <Title
            title='New Arrivals'
            subtitle='Checkout out the latest release of Basic Tees, new and improved with four openings!'
          />

          <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <AsideBar filters={filters} />

            <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
              <h2 id="product-heading" className="sr-only">
                Products
              </h2>

              <ProductGridCategories products={Products}/>

            </section>
          </div>
        </main>

      </div>
    </div>
  )
}
