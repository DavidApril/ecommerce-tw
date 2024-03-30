export interface Product {
  id: string
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  options: string;
  rating: number;
  colors: Color[]
  type: ValidTypes;
  details: Detail[] | never[],
  gender: 'men' | 'women' | 'kid' | 'unisex';
}

type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';

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