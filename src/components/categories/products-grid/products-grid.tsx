import { Product } from "@/interfaces"
import { ProductGridItem } from "./product-grid-item";


interface Props {
    products: Product[];
}

export const ProductGridCategories = ({ products }: Props) => {
    return (
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
            {products.map((product) => (
                <ProductGridItem product={ product } />
            ))}
        </div>
    )
}
