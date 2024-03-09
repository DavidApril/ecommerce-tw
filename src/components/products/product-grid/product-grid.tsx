import { Product } from "@/interfaces"

interface Props {
    products: Product[]
}

export const ProductGrid = ({ products }: Props) => {
    return (
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {products.map((product) => (
                <div key={product.id} className="group relative">
                    <div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
                        <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">
                        <a href={product.href}>
                            <span className="absolute inset-0" />
                            {product.name}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                </div>
            ))}
        </div>
    )
}
