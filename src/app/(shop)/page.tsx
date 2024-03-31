import { getPaginatedProductsWithImages } from '@/actions';
import { FrontHomePage, PerksSection, TrendingProducts } from '@/components'
import { redirect } from 'next/navigation';

interface Props {
  searchParams: {
    page?: string;
  }
}


export default async function Home({ searchParams }: Props) {

  const page = searchParams.page ? parseInt( searchParams.page ) : 1;
  const { products, totalPages } = await getPaginatedProductsWithImages({ page })

  if( products.length === 0){
    redirect('/')
  }


  return (
    <div className="bg-white">

      <main>
        
        <FrontHomePage/>

        <TrendingProducts products={products} totalPages={totalPages}/>


        <PerksSection/>

      </main>


    </div>
  )
}
