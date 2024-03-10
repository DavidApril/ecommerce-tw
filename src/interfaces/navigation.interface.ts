export interface Navigation {
    categories: Category[]
    pages: Page[]
  }
  
  export interface Category {
    id: string
    name: string
    featured: Featured[]
    sections: Section[][]
  }
  
  export interface Featured {
    name: string
    href: string
    imageSrc: string
    imageAlt: string
  }
  
  export interface Section {
    id: string
    name: string
    items: Item[]
  }
  
  export interface Item {
    name: string
    href: string
  }
  
  export interface Page {
    name: string
    href: string
  }
  