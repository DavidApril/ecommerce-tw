
import prisma from "../lib/prisma";
import { initialData } from "./seed";

async function main() {

    // 1. Borrar registros previos
    // await Promise.all( [
    await prisma.productImage.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    // ]);

    const { categories, products } = initialData;

    const categoriesData = categories.map((name) => ({ name }));

    await prisma.category.createMany({
        data: categoriesData
    });

    const categoriesDB = await prisma.category.findMany();

    const categoriesMap = categoriesDB.reduce((map, category) => {
        map[category.name.toLowerCase()] = category.id;
        return map;
    }, {} as Record<string, string>); //<string=shirt, string=categoryID>

    // Productos
    products.forEach(async (product) => {
        const { type, images, colors,details, ...rest } = product;
        const dbProduct = await prisma.product.create({
            data: {
                ...rest,
                categoryId: categoriesMap[type]
            }
        })
        // Images
        const imagesData = images.map(image => ({
            productId: dbProduct.id,
            name: image.name,
            src: image.src,
            alt: image.alt
        }));

        await prisma.productImage.createMany({
            data: imagesData
        })

    })
    
    console.log('seed executed correctly')
}

(() => {
    if (process.env.NODE_ENV === 'production') return;
    main();
})();