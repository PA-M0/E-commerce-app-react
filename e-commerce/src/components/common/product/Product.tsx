import React from 'react';
import { ProductShape as ProductType } from '../types/product';
import styles from './Product.module.scss';

interface ProductProps {
  product: ProductType;
}

const Product = ({ product }:ProductProps) => {
 
  return (
    <div className={styles.product}>
    <div className={styles.productImageBackground}>
      <img src={product.image} alt={product.title} className={styles.productImage} />
    </div>
    <h2 className={styles.productName}>{product.title}</h2>
    <p className={styles.productDescription}>{product.description}</p>
    <p className={styles.productPrice}>${product.price}</p>
    <button className={styles.addToCartButton}>Add to Cart</button>
  </div>
  );
};

export default Product;
