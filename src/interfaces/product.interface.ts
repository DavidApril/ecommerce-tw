import {  ValidCategories } from ".";

export interface Product {
  id: string;
  name: string
  category: ValidCategories;
  price: string
  rating: number
  images: Image[]
  options: string
  colors: Color[]
  size: Size
  description: string
  details: Detail[]
}

export interface Image {
  id: number
  name: string
  src: string
  alt: string
}

export interface Color {
  name: string
  bgColor: string
  selectedColor: string
}

export interface Detail {
  name: string
  items: string[]
}

export interface RelatedProducts {
  id: number
  name: string
  color: string
  href: string
  imageSrc: string
  imageAlt: string
  price: string
}

export type Size = 'XL' | 'XS' | 'M' | 'L' | 'S'