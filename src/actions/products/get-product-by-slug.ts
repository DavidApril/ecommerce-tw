'use server'

import prisma from "@/lib/prisma"

export const getProductBySlug = async ( slug: string ) => {

    try {
        const product = await prisma.product.findFirst({
            include: {
                ProductImage: {
                    select: {
                        src: true,
                    }
                }
            },
            where: { slug }
        })

        if ( !product ) return null

        const { ProductImage, ...rest } = product

        return {
            ...rest,
            images: product.ProductImage.map( image => image.src)
        }

    } catch (error) {
        console.log(error)
        throw new Error('Error')
    }
}