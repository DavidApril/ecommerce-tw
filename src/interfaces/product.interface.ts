export interface Product {
  id: string;
  name: string
  category: ValidCategory;
  price: string
  rating: number
  images: Image[]
  options: string
  colors: Color[]
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

export type ValidCategory = 'clothes' | 'utils' | 'food' 