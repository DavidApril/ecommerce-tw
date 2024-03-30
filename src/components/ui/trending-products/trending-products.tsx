import { getPaginatedProductsWithImages } from "@/actions"
import { Pagination, ProductGrid } from "@/components"

export const TrendingProducts = async () => {

    const { products } = await getPaginatedProductsWithImages()

  return (
    <section aria-labelledby="trending-heading">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
        <div className="md:flex md:items-center md:justify-between">
          <h2 id="favorites-heading" className="text-2xl font-bold tracking-tight text-gray-900">
            Trending Products
          </h2>
          <a href="#" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <ProductGrid products={products} />

        <Pagination totalPage={ 5 } />

        <div className="mt-8 text-sm md:hidden">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
          </div>


      </div>
    </section>
  )
}
