import { Product, RelatedProducts } from "../interfaces";


export const products: Product[] = [
  {
    id: '1',
    description: 'A classic crewneck t-shirt made from soft cotton fabric. Perfect for everyday wear.',
    images: [
      { id: 1, name: 'Front view', src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-03.jpg', alt: 'Front view of the t-shirt.' },
      // Additional images if needed
    ],
    inStock: 100,
    price: 25,
    sizes: ['S', 'M', 'L', 'XL'],
    slug: 'lasi-ewne-t-sirt',
    tags: ['casual', 'basic', 't-shirt'],
    title: 'Classic Crewneck T-Shirt',
    options: '4 colors',
    rating: 4,
    colors: [
      { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
      { name: 'Black', bgColor: 'bg-black', selectedColor: 'ring-gray-700' },
      { name: 'Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
      { name: 'Navy Blue', bgColor: 'bg-blue-900', selectedColor: 'ring-blue-900' },
    ],
    type: 'shirts',
    details: [],
    gender: 'unisex',
  },
  {
    id: '2',
    description: 'A pair of comfortable slim-fit jeans made from stretch denim fabric. Available in various washes.',
    images: [
      { id: 1, name: 'Front view', src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg', alt: 'Front view of the jeans.' },
      // Additional images if needed
    ],
    inStock: 80,
    price: 45,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    slug: 'li-ittreth-jens',
    tags: ['jeans', 'denim', 'slim-fit'],
    title: 'Slim Fit Stretch Jeans',
    options: '3 washes',
    rating: 4.5,
    colors: [
      { name: 'Indigo', bgColor: 'bg-indigo-900', selectedColor: 'ring-indigo-900' },
      { name: 'Black', bgColor: 'bg-black', selectedColor: 'ring-black' },
      { name: 'Light Blue', bgColor: 'bg-blue-200', selectedColor: 'ring-blue-200' },
    ],
    type: 'pants',
    details: [],
    gender: 'unisex',
  },
  {
    id: '3',
    description: 'A cozy hoodie crafted from soft fleece fabric. Perfect for staying warm on chilly days.',
    images: [
      { id: 1, name: 'Front view', src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg', alt: 'Front view of the hoodie.' },
      // Additional images if needed
    ],
    inStock: 70,
    price: 55,
    sizes: ['S', 'M', 'L', 'XL'],
    slug: 'ozyflce-hodie',
    tags: ['hoodie', 'fleece', 'warm'],
    title: 'Cozy Fleece Hoodie',
    options: '4 colors',
    rating: 4.7,
    colors: [
      { name: 'Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
      { name: 'Black', bgColor: 'bg-black', selectedColor: 'ring-black' },
      { name: 'Navy Blue', bgColor: 'bg-blue-900', selectedColor: 'ring-blue-900' },
      { name: 'Burgundy', bgColor: 'bg-red-700', selectedColor: 'ring-red-700' },
    ],
    type: 'hoodies',
    details: [],
    gender: 'unisex',
  },
  {
    id: '4',
    description: 'A stylish baseball cap made from durable cotton twill fabric. Perfect for adding a sporty touch to your outfit.',
    images: [
      { id: 1, name: 'Front view', src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg', alt: 'Front view of the cap.' },
      // Additional images if needed
    ],
    inStock: 120,
    price: 20,
    sizes: [],
    slug: 'lasicasebll',
    tags: ['cap', 'hat', 'baseball'],
    title: 'Classic Baseball Cap',
    options: '4 colors',
    rating: 4.3,
    colors: [
      { name: 'Black', bgColor: 'bg-black', selectedColor: 'ring-black' },
      { name: 'Navy Blue', bgColor: 'bg-blue-900', selectedColor: 'ring-blue-900' },
      { name: 'Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
      { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    ],
    type: 'hats',
    details: [],
    gender: 'unisex',
  },
  {
    id: '5',
    description: 'A versatile denim jacket that adds a touch of casual style to any outfit. Made from durable denim fabric.',
    images: [
      { id: 1, name: 'Front view', src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg', alt: 'Front view of the denim jacket.' },
      // Additional images if needed
    ],
    inStock: 50,
    price: 70,
    sizes: ['S', 'M', 'L', 'XL'],
    slug: 'lasicenimjakt',
    tags: ['jacket', 'denim', 'casual'],
    title: 'Classic Denim Jacket',
    options: '2 washes',
    rating: 4.6,
    colors: [
      { name: 'Indigo', bgColor: 'bg-indigo-900', selectedColor: 'ring-indigo-900' },
      { name: 'Black', bgColor: 'bg-black', selectedColor: 'ring-black' },
    ],
    type: 'shirts',
    details: [],
    gender: 'unisex',
  },
  {
    id: '6',
    description: 'A versatile denim jacket that adds a touch of casual style to any outfit. Made from durable denim fabric.',
    images: [
      { id: 1, name: 'Front view', src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg', alt: 'Front view of the denim jacket.' },
      // Additional images if needed
    ],
    inStock: 50,
    price: 70,
    sizes: ['S', 'M', 'L', 'XL'],
    slug: 'lasicejakt',
    tags: ['jacket', 'denim', 'casual'],
    title: 'Classic Denim Jacket',
    options: '2 washes',
    rating: 4.6,
    colors: [
      { name: 'Indigo', bgColor: 'bg-indigo-900', selectedColor: 'ring-indigo-900' },
      { name: 'Black', bgColor: 'bg-black', selectedColor: 'ring-black' },
    ],
    type: 'shirts',
    details: [],
    gender: 'unisex',
  },
  {
    id: '7',
    description: 'A versatile denim jacket that adds a touch of casual style to any outfit. Made from durable denim fabric.',
    images: [
      { id: 1, name: 'Front view', src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg', alt: 'Front view of the denim jacket.' },
      // Additional images if needed
    ],
    inStock: 50,
    price: 70,
    sizes: ['S', 'M', 'L', 'XL'],
    slug: 'lasicejckt',
    tags: ['jacket', 'denim', 'casual'],
    title: 'Classic Denim Jacket',
    options: '2 washes',
    rating: 4.6,
    colors: [
      { name: 'Indigo', bgColor: 'bg-indigo-900', selectedColor: 'ring-indigo-900' },
      { name: 'Black', bgColor: 'bg-black', selectedColor: 'ring-black' },
    ],
    type: 'shirts',
    details: [],
    gender: 'unisex',
  },
  {
    id: '8',
    description: 'A versatile denim jacket that adds a touch of casual style to any outfit. Made from durable denim fabric.',
    images: [
      { id: 1, name: 'Front view', src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg', alt: 'Front view of the denim jacket.' },
      // Additional images if needed
    ],
    inStock: 50,
    price: 70,
    sizes: ['S', 'M', 'L', 'XL'],
    slug: 'lamjackt',
    tags: ['jacket', 'denim', 'casual'],
    title: 'Classic Denim Jacket',
    options: '2 washes',
    rating: 4.6,
    colors: [
      { name: 'Indigo', bgColor: 'bg-indigo-900', selectedColor: 'ring-indigo-900' },
      { name: 'Black', bgColor: 'bg-black', selectedColor: 'ring-black' },
    ],
    type: 'shirts',
    details: [],
    gender: 'unisex',
  },
  {
    id: '9',
    description: 'A versatile denim jacket that adds a touch of casual style to any outfit. Made from durable denim fabric.',
    images: [
      { id: 1, name: 'Front view', src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg', alt: 'Front view of the denim jacket.' },
      // Additional images if needed
    ],
    inStock: 50,
    price: 70,
    sizes: ['S', 'M', 'L', 'XL'],
    slug: 'lenimjackt',
    tags: ['jacket', 'denim', 'casual'],
    title: 'Classic Denim Jacket',
    options: '2 washes',
    rating: 4.6,
    colors: [
      { name: 'Indigo', bgColor: 'bg-indigo-900', selectedColor: 'ring-indigo-900' },
      { name: 'Black', bgColor: 'bg-black', selectedColor: 'ring-black' },
    ],
    type: 'shirts',
    details: [],
    gender: 'unisex',
  },
  {
    id: '10',
    description: 'A versatile denim jacket that adds a touch of casual style to any outfit. Made from durable denim fabric.',
    images: [
      { id: 1, name: 'Front view', src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg', alt: 'Front view of the denim jacket.' },
      // Additional images if needed
    ],
    inStock: 50,
    price: 70,
    sizes: ['S', 'M', 'L', 'XL'],
    slug: 'lasicenimjckt',
    tags: ['jacket', 'denim', 'casual'],
    title: 'Classic Denim Jacket',
    options: '2 washes',
    rating: 4.6,
    colors: [
      { name: 'Indigo', bgColor: 'bg-indigo-900', selectedColor: 'ring-indigo-900' },
      { name: 'Black', bgColor: 'bg-black', selectedColor: 'ring-black' },
    ],
    type: 'shirts',
    details: [],
    gender: 'unisex',
  },
];

interface SeedData {
  categories: string[];
  products: typeof products;
}

export const initialData: SeedData = {
  categories: [
    'Shirts', 'Pants', 'Hoodies', 'Hats'
  ],
  products: [...products]
} 

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