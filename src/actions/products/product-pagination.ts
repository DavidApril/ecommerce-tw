'use server'
import prisma from '@/lib/prisma'

export const getPaginatedProductsWithImages = async () => {
    try {
        const products = await prisma.product.findMany({
            include: {
                ProductImage: {
                    take: 2,
                    select: {
                        id: true,
                        name: true,
                        src: true,
                        alt: true,
                    }
                }
            }
        })

        return {
            products: products.map(product => ({
                ...product,
                images: product.ProductImage.map( image => {
                    return {
                        id: image.id,
                        name: image.name,
                        src: image.src,
                        alt: image.alt,
                    }
                })
            }))
        }

    } catch (error) {
        throw new Error('No se pudo cargar')
    }
}

