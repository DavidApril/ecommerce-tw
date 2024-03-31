
export interface Product {
  id: string
  title: string;
  description: string;
  inStock: number;
  price: number;
  sizes: Size[];
  slug: string;
  tags: string[];
  gender: 'men' | 'women' | 'kid' | 'unisex';
  rating: number;
  options: string;
  images: Image[];
  colors: Color[]
  type: ValidTypes;
  details: Detail[] | never[],
}

type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';
type Gender = "men" | "women" | "kid" | "unisex"

export interface Color {
  name: string
  bgColor: string
  selectedColor: string
}

export interface Image {
  id: number
  name: string;
  alt?: string;
  src: string;
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