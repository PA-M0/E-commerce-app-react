import { ProductShape } from '../components/common/types/product.ts';
import axios from 'axios';



export const getProducts = async (): Promise<ProductShape[]> => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    throw new Error('Network response was not ok');
  }
};