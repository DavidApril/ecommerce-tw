export interface Product {
  id: number
  name: string
  category?: ValidCategories;
  color?: string
  price: string
  href: string
  imageSrc: string[]
  imageAlt: string
  description?: string
  options?: string
}

export type ValidCategories = 'utils' | 'clothes'