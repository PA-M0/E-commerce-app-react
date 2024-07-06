import { ProductShape } from '../components/common/types/product.ts';
import axios from 'axios';



export const getProducts = async (API_URL:string): Promise<ProductShape[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Network response was not ok');
  }
};


export const getSpecificeProduct = async (API_URL:string): Promise<ProductShape> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Network response was not ok');
  }
};