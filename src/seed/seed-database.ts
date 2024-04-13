import { Detail, Product } from '../interfaces';
import prisma from '../lib/prisma';
import { initialData } from './seed';
import { countries } from './seed-countries';

async function main() {
  await Promise.all([
    prisma.country.deleteMany(),
    prisma.user.deleteMany(),
    prisma.country.deleteMany(),
    prisma.productImage.deleteMany(),
    prisma.productColors.deleteMany(),
    prisma.productDetails.deleteMany(),
    prisma.product.deleteMany(),
    prisma.category.deleteMany(),
  ]);

  const { categories, products, users } = initialData;

  // Countries
  await prisma.country.createMany({
    data: countries
  })

  // Users
  await prisma.user.createMany({
    data: users,
  });

  const categoriesData = categories.map((name) => ({ name }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce(
    (map, category) => {
      map[category.name.toLowerCase()] = category.id;
      return map;
    },
    {} as Record<string, string>,
  ); //<string=shirt, string=categoryID>

  // Productos
  products.forEach(async (product: Product) => {
    const { type, images, colors, details, ...rest } = product;
    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type],
      },
    });
    // Images
    const imagesData = product.images.map((image) => ({
      productId: dbProduct.id,
      name: image.name,
      src: image.src,
      alt: image.alt,
    }));
    await prisma.productImage.createMany({ data: imagesData });

    // Colors

    const colorsData = product.colors.map((color) => ({
      productId: dbProduct.id,
      name: color.name,
      bgColor: color.bgColor,
      selectedColor: color.selectedColor,
    }));
    await prisma.productColors.createMany({ data: colorsData });

    // Details
    const detailsData = product.details.map((details: Detail) => ({
      productId: dbProduct.id,
      name: details.name,
      items: details.items.map((item) => item),
    }));
    await prisma.productDetails.createMany({ data: detailsData });
  });

  console.log('seed executed correctly');
}

(() => {
  if (process.env.NODE_ENV === 'production') return;
  main();
})();
