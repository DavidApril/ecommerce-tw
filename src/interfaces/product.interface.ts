export interface Product {
  name: string
  price: string
  rating: number
  images: Image[]
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
