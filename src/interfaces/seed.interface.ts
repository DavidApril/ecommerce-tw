import { Color, Detail, Image, Product } from '@/interfaces'

export interface SeedData {
  users: SeedUser[]
  categories: string[];
  products: Product;
}

type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';

export interface SeedProduct {
  description: string;
  images: Image[];
  inStock: number;
  price: number;
  colors: Color[];
  details: Detail[];
  slug: string;
  tags: string[];
  title: string;
  options: string;
  rating: number
  type: ValidTypes;
  gender: 'men' | 'women' | 'kid' | 'unisex';
}

export interface SeedUser {
    email:string;
    name: string;
    password: string;
    role: 'admin' | 'user'
}
