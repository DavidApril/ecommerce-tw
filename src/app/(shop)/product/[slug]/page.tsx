import { products, relatedProducts } from '@/seed/seed'
import { notFound } from 'next/navigation'
import { AlsoBought, ImageGallery, ProductInfo } from '@/components'

interface Props {
    params: {
        slug: string
    }
}

export default function ({ params }: Props) {
    const { slug } = params;
    const product = products.find(product => product.slug === slug)

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
                        <ProductInfo product={product} />

                    </div>

                    <AlsoBought relatedProducts={relatedProducts}/>
                </div>
            </main>
        </div>
    )
}
