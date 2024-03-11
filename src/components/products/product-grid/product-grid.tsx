import { ProductGridItem } from "@/components"
import { Product } from "@/interfaces"

interface Props {
    products: Product[]
}

export const ProductGrid = ({ products }: Props) => {
    return (
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {products.map((product) => (
                <ProductGridItem key={ product.id } product={product} />
            ))}
        </div>
    )
}
