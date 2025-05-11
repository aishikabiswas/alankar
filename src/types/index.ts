
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CategoryType;
  images: string[];
  featured?: boolean;
}

export type CategoryType = 'replica' | 'clay' | 'black-polish' | 'oxidised' | 'bohemian' | 'tote-bags';

export interface Category {
  id: CategoryType;
  name: string;
  description: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name?: string;
}
