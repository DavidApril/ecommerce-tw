export const revalidate = 60

import { MobileFilterMenu } from '@/components/ui/mobile-filter/mobile-filter'
import { AsideBar, Pagination, ProductGridCategories, Title } from '@/components'
import { filters } from '@/config/filters'
import { getPaginatedProductsWithImages } from '@/actions'
import { Gender } from '@prisma/client'

interface Props {
  params: {
    gender: string;
  },
  searchParams: {
    page: string
  }
}

export default async function ({ params, searchParams }: Props) {

  const { gender } = params; 
  
  const page = searchParams.page ? parseInt( searchParams.page ) : 1;
  
  const { products, totalPages } = await getPaginatedProductsWithImages({ page, gender: gender as Gender })
  const productByCategory = products.filter( product => product.gender == gender)

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <MobileFilterMenu />

        <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
          <Title
            title={`New Arrivals`}
            subtitle='Checkout out the latest release of Basic Tees, new and improved with four openings!'
          />

          <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <AsideBar filters={filters} />

            <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
              <h2 id="product-heading" className="sr-only">
                Products
              </h2>

              <ProductGridCategories products={ productByCategory }/>
              <Pagination totalPages={totalPages}/>
            </section>
          </div>
        </main>

      </div>
    </div>
  )
}
