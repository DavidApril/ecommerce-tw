
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
  categoryId: string;
  details: Detail[] | never[],
}

export interface CartProduct {
  id: string,
  slug: string,
  title: string,
  price: number,
  quantity: number,
  color: Color,
  image: string
}

export interface Color {
  name: string
  bgColor: string
  selectedColor: string
}

export interface Image {
  id: number
  name: string | null;
  alt: string | null;
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