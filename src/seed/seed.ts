import { Product, RelatedProducts } from "@/interfaces";


export const products: Product[] = [
  {
    id: '1',
    name: 'Zip Tote Basket',
    category: 'clothes',
    price: '$140',
    options: '8 colors',
    rating: 4,
    size: 'XL',
    images: [
      {
        id: 1,
        name: 'Angled view',
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
        alt: 'Angled front view with bag zipped and handles upright.',
      },
      {
        id: 2,
        name: 'Angled view',
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg',
        alt: 'Angled front view with bag zipped and handles upright.',
      },
      // More images...
    ],
    colors: [
      { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
      { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
      { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
    ],
    description: `
    The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.
  `,
    details: [
      {
        name: 'Features',
        items: [
          'Multiple strap configurations',
          'Spacious interior with top zip',
          'Leather handle and tabs',
          'Interior dividers',
          'Stainless strap loops',
          'Double stitched construction',
          'Water-resistant',
        ],
      },
      // More sections...
    ],
  },
  {
    id: '2',
    name: 'Casual Messenger Bag',
    category: 'clothes',
    price: '$90',
    options: '4 colors',
    size: 'S',
    rating: 5,
    images: [
      {
        id: 1,
        name: 'Angled view',
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-03.jpg',
        alt: 'Angled front view with bag zipped and handles upright.',
      },
    ],
    colors: [
      { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
      { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
      { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
    ],
    description: `
    The Casual Messenger Bag is a versatile and stylish bag for everyday use. It features multiple pockets for organization, an adjustable shoulder strap, and a flap closure for added security. Whether you're heading to work or going out with friends, this bag is a perfect companion.
  `,
    details: [
      // Detalles del Casual Messenger Bag...
    ],
  },
  // Agregar más productos aquí...
];



export const relatedProducts: RelatedProducts[] = [
  {
      id: 1,
      name: 'Zip Tote Basket',
      color: 'White and black',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
  },
  // More products...
]