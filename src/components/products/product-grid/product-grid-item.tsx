'use client';
import { useState } from "react";
import { Image as ImageInterface, Product } from "@/interfaces"
import Image from "next/image";
import Link from "next/link";

interface Props {
    product: Product;
}

export const ProductGridItem = ({ product }: Props) => {

    const [displayImage, setDisplayImage] = useState<ImageInterface>(product.images[0])

    return (
        <div
            key={product.id}
            className="group relative hover:scale-105 transition-all flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            onMouseEnter={() => {
                if (product.images[1]) setDisplayImage(product.images[1])
            }}
            onMouseLeave={() => setDisplayImage(product.images[0])}
        >
            <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <Link href={`/product/${product.id}`}>
                    <Image
                        src={ displayImage?.src }
                        alt={ displayImage?.alt || '' }
                        className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                        width={500}
                        height={500}

                    />
                </Link>
            </div>
            <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                    <Link className="hover:text-blue-800" href={`/product/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                    </Link>
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="flex flex-1 flex-col justify-end">
                    <p className="text-sm italic text-gray-500">{product.options}</p>
                    <p className="text-base font-medium text-gray-900">{product.price}</p>
                </div>
            </div>
        </div>
    )
}
