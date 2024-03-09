'use client';

import { useState } from "react";
import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
    product: Product;
}

export const ProductGridItem = ({ product }: Props) => {

    const [displayImage, setDisplayImage] = useState<string>(product.imageSrc[0])

    return (
        <div
            onMouseEnter={() => setDisplayImage(product.imageSrc[1])}
            onMouseLeave={() => setDisplayImage(product.imageSrc[0])}
            className="group relative">
            <div
                className="h-56 w-full rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
                <Link href={`/product/${product.id}`}>
                    <Image
                        src={displayImage}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center z-50"
                        width={500}
                        height={500}
                    />
                </Link>
            </div>
            <Link className="" href={`/product/${product.id}`}>
                <h3 className="hover:text-blue-800 mt-4 text-sm text-gray-700">
                    <span className="absolute inset-0" />
                    {product.name}
                </h3>
            </Link>
            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
            <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
        </div>
    )
}
