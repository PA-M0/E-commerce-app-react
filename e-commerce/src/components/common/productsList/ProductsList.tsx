import React, { useEffect, useState } from 'react';
import { ProductShape as ProductType } from '../types/product.ts';
import { getProducts } from '../../../services/ProductService.ts';
import Product from '../product/Product.tsx';
import styles from './ProductsList.module.scss';
import Skeleton from '../skeleton/Skeleton'
import Filter, { Filters } from "../filter/Filter";

const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const API_URL = 'https://fakestoreapi.com/products'

  useEffect(() => {
    getProducts(API_URL)
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  const handleFilterChange = (filters: Filters) => {
    let filtered = [...products];

   

    if (filters.sortBy === "Price: Low to High") {
      filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (filters.sortBy === "Price: High to Low") {
      filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
    }

    filtered = filtered.filter(
      (product) => (product.price || 0) >= filters.minPrice && (product.price || 0) <= filters.maxPrice
    );

    if (filters.category !== "All Categories") {
      filtered = filtered.filter((product) => product.category === filters.category);
    }

    setFilteredProducts(filtered);
  };

  if (loading) {  
    return (
      <div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  const brands = [...new Set(products.map((product) => product.brand || ""))];
  const categories = [...new Set(products.map((product) => product.category || ""))];

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Filter
          categories={categories}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div className={styles.productList}>
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
