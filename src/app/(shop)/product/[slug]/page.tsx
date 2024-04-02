import { notFound } from 'next/navigation'
import { AddToCart, ImageGallery, ProductInfo } from '@/components'
import { getProductBySlug } from '@/actions'
import { Product } from '@/interfaces'

interface Props {
    params: {
        slug: string
    }
}

export default async function ProductBySlugPage({ params }: Props) {
    const { slug } = params;
    const product = await getProductBySlug( slug )

    if (!product) notFound()

    return (
        <div className="bg-white">
            <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    {/* Product */}
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* Image gallery */}
                        <ImageGallery images={product.images} />

                        {/* Product info */}
                        <ProductInfo product={product as Product} />
                    </div>
                    {/* <AlsoBought relatedProducts={relatedProducts}/> */}
                </div>
            </main>
        </div>
    )
}
