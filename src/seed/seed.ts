
import bcryptjs from 'bcryptjs'
import { randomUUID } from "crypto";
import { Product, RelatedProducts, SeedData } from "../interfaces";

export const products: Product[] = [
  {
    id: randomUUID(),
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
      { name: 'White', selectedColor: 'B', bgColor: 'bg-white' },
      { name: 'Black', selectedColor: 'B', bgColor: 'bg-black' },
      { name: 'Gray', selectedColor: 'B', bgColor: 'bg-gray-500' },
      { name: 'Navy Blue', selectedColor: 'B', bgColor: 'bg-blue-900' },
    ],
    type: 'shirts',
    details: [
      {
        name: 'Material',
        items: ['Durable denim fabric']
      },
      {
        name: 'Care Instructions',
        items: ['Machine wash cold', 'Tumble dry low', 'Do not bleach', 'Warm iron if needed']
      },
    ],
    gender: 'unisex',
  },
  {
    id: randomUUID(),
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
      { name: 'Indigo', selectedColor: 'B', bgColor: 'bg-indigo-900' },
      { name: 'Black', selectedColor: 'B', bgColor: 'bg-black' },
      { name: 'Light Blue', selectedColor: 'B', bgColor: 'bg-blue-200' },
    ],
    type: 'pants',
    details: [
      {
        name: 'Material',
        items: ['Durable denim fabric']
      },
      {
        name: 'Care Instructions',
        items: ['Machine wash cold', 'Tumble dry low', 'Do not bleach', 'Warm iron if needed']
      },
    ],
    gender: 'unisex',
  },
  {
    id: randomUUID(),
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
      { name: 'Gray', selectedColor: 'B', bgColor: 'bg-gray-500' },
      { name: 'Black', selectedColor: 'B', bgColor: 'bg-black' },
      { name: 'Navy Blue', selectedColor: 'B', bgColor: 'bg-blue-900' },
      { name: 'Burgundy', selectedColor: 'B', bgColor: 'bg-red-700' },
    ],
    type: 'hoodies',
    details: [
      {
        name: 'Material',
        items: ['Durable denim fabric']
      },
      {
        name: 'Care Instructions',
        items: ['Machine wash cold', 'Tumble dry low', 'Do not bleach', 'Warm iron if needed']
      },
    ],
    gender: 'unisex',
  },
  {
    id: randomUUID(),
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
      { name: 'Black', selectedColor: 'B', bgColor: 'bg-black' },
      { name: 'Navy Blue', selectedColor: 'B', bgColor: 'bg-blue-900' },
      { name: 'Gray', selectedColor: 'B', bgColor: 'bg-gray-500' },
      { name: 'White', selectedColor: 'B', bgColor: 'bg-white' },
    ],
    type: 'hats',
    details: [
      {
        name: 'Material',
        items: ['Durable denim fabric']
      },
      {
        name: 'Care Instructions',
        items: ['Machine wash cold', 'Tumble dry low', 'Do not bleach', 'Warm iron if needed']
      },
    ],
    gender: 'unisex',
  },
  {
    id: randomUUID(),
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
      { name: 'Indigo', selectedColor: 'B', bgColor: 'bg-indigo-900' },
      { name: 'Black', selectedColor: 'B', bgColor: 'bg-black' },
    ],
    type: 'shirts',
    details: [
      {
        name: 'Material',
        items: ['Durable denim fabric']
      },
      {
        name: 'Care Instructions',
        items: ['Machine wash cold', 'Tumble dry low', 'Do not bleach', 'Warm iron if needed']
      },
    ],
    gender: 'unisex',
  },
  {
    id: randomUUID(),
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
      { name: 'Indigo', selectedColor: 'B', bgColor: 'bg-indigo-900' },
      { name: 'Black', selectedColor: 'B', bgColor: 'bg-black' },
    ],
    type: 'shirts',
    details: [
      {
        name: 'Material',
        items: ['Durable denim fabric']
      },
      {
        name: 'Care Instructions',
        items: ['Machine wash cold', 'Tumble dry low', 'Do not bleach', 'Warm iron if needed']
      },
    ],
    gender: 'unisex',
  },
  {
    id: randomUUID(),
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
      { name: 'Indigo', selectedColor: 'B', bgColor: 'bg-indigo-900' },
      { name: 'Black', selectedColor: 'B', bgColor: 'bg-black' },
    ],
    type: 'shirts',
    details: [
      {
        name: 'Material',
        items: ['Durable denim fabric']
      },
      {
        name: 'Care Instructions',
        items: ['Machine wash cold', 'Tumble dry low', 'Do not bleach', 'Warm iron if needed']
      },
    ],
    gender: 'unisex',
  },
  {
    id: randomUUID(),
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
      { name: 'Indigo', selectedColor: 'B', bgColor: 'bg-indigo-900' },
      { name: 'Black', selectedColor: 'B', bgColor: 'bg-black' },
    ],
    type: 'shirts',
    details: [
      {
        name: 'Material',
        items: ['Durable denim fabric']
      },
      {
        name: 'Care Instructions',
        items: ['Machine wash cold', 'Tumble dry low', 'Do not bleach', 'Warm iron if needed']
      },
    ],
    gender: 'unisex',
  },
  {
    id: randomUUID(),
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
      { name: 'Indigo', selectedColor: 'B', bgColor: 'bg-indigo-900' },
      { name: 'Black', selectedColor: 'B', bgColor: 'bg-black' },
    ],
    type: 'shirts',
    details: [
      {
        name: 'Material',
        items: ['Durable denim fabric']
      },
      {
        name: 'Care Instructions',
        items: ['Machine wash cold', 'Tumble dry low', 'Do not bleach', 'Warm iron if needed']
      },
    ],
    gender: 'unisex',
  },
  {
    id: randomUUID(),
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
      { name: 'Indigo', selectedColor: 'B', bgColor: 'bg-indigo-900' },
      { name: 'Black', selectedColor: 'B', bgColor: 'bg-black' },
    ],
    type: 'shirts',
    details: [
      {
        name: 'Material',
        items: ['Durable denim fabric']
      },
      {
        name: 'Care Instructions',
        items: ['Machine wash cold', 'Tumble dry low', 'Do not bleach', 'Warm iron if needed']
      },
    ],
    gender: 'unisex',
  },
];

export const initialData: SeedData = {
  users: [
    {
      email: 'davidagamez04@gmail.com',
      name: 'David Agámez',
      password: bcryptjs.hashSync('123456789'),
      role: 'admin'
    },
    {
      email: 'jesusdavidagamez04@gmail.com',
      name: 'David Agámez',
      password: bcryptjs.hashSync('123456789'),
      role: 'user'
    }
  ],
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