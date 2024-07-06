import React, { useEffect, useState } from 'react';
import { ProductShape as ProductType } from '../types/product.ts';
import { getProducts } from '../../../services/ProductService.ts';
import Product from '../product/Product.tsx';
import styles from './ProductsList.module.scss';
import Skeleton from '../skeleton/Skeleton'


const ProductList = () => {
 const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      getProducts()
        .then((data) => {
      
          setProducts(data);
          setLoading(false);
          console.log(products)
        })
        .catch((err) => {
          setError('Failed to load products');
          setLoading(false);
        });
    }, []);

  if (loading) {
    return <div >
       
          <Skeleton />
          <Skeleton />
          <Skeleton />

        
    </div>; // Render spinner while loading
  }

  if (error) {
    return <div>{error}</div>; // Render error message
  }

  return (
    <div className={styles.productListParent}>
      <div className={styles.productListChild}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
    
  );
};

export default ProductList;
