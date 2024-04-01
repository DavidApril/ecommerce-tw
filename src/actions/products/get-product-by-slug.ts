'use server'

import prisma from "@/lib/prisma"

export const getProductBySlug = async ( slug: string ) => {

    try {
        const product = await prisma.product.findFirst({
            include: {
                ProductImage: {
                    select: {
                        id: true,
                        name: true,
                        src: true,
                        alt: true,
                    }
                },
                ProductColors: {
                    select: {
                        name: true,
                        bgColor: true,
                    }
                },
                ProductDetails: {
                    select: {
                        name: true,
                        items: true,
                    }
                }
            },
            where: { slug }
        })

        if ( !product ) return null

        const { ProductImage, ...rest } = product

        return {
            ...rest,
            images: product.ProductImage.map( image => ({
                id: image.id,
                name: image.alt,
                src: image.src,
                alt: image.alt,
            })),
            colors: product.ProductColors.map( color => ({
                name: color.name,
                bgColor: color.bgColor
            })),
            details: product.ProductDetails.map( details => ({
                name: details.name,
                items: details.items
            }))
        }

    } catch (error) {
        console.log(error)
        throw new Error('Error')
    }
}