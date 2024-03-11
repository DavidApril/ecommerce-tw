import { Product } from "@/interfaces"
import { ColorSelector } from "./selectors/color-selector";
import { Reviews } from "./reviews/reviews";
import { Details } from "./details/details";

interface Props {
    product: Product;
}

export const ProductInfo = ({ product }: Props) => {

    return (
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

            <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
            </div>

            {/* Reviews */}
            <Reviews description={product.description} rating={product.rating} />

            {/* Colors */}
            <ColorSelector colors={product.colors} />

            {/* Details */}
            <Details details={product.details}/>
        </div>
    )
}
