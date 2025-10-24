export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number; 
  distributorPrice?: number; 
  category: string;
  stock: number;
  rating: number;
  description: string;
  hasDiscount?: boolean;
  expiryDate?: string;
}

export type UserRole = 'GUEST' | 'DISTRIBUTOR';