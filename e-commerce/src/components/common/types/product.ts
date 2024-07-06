export interface ProductShape {
  id: number;
  title: string;
  category: string;
  description?: string;
  price: number;
  image?: string;
  rating?: {
    rate: number;
    count: number;
  };
}