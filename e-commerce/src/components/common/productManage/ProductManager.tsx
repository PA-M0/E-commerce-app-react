import React, { useState } from 'react';
import styles from './ProductManager.module.scss';
import { ProductShape as ProductType } from '../types/product';
import Button from '../button/Button.tsx'
interface AddProductFormProps {
  onAddProduct: (product: ProductType) => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ onAddProduct }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [rating, setRating] = useState({ rate: 0, count: 0 });

  const handleAddProduct = () => {
    const newProduct: ProductType = {
      id: Date.now(), // Simple ID generation
      title,
      price,
      description,
      category,
      image,
      rating
    };
    onAddProduct(newProduct);
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setPrice(0);
    setDescription('');
    setCategory('');
    setImage('');
    setRating({ rate: 0, count: 0 });
  };

  return (
    <div className={styles.addProductForm}>
      <h2>Add New Product</h2>
      <div className={styles.formGroup}>
        <label htmlFor="title">Title</label>
        <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="price">Price</label>
        <input id="price" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="description">Description</label>
        <input id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="category">Category</label>
        <input id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="image">Image URL</label>
        <input id="image" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="rate">Rating (Rate)</label>
        <input id="rate" type="number" value={rating.rate} onChange={(e) => setRating({ ...rating, rate: Number(e.target.value) })} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="count">Rating (Count)</label>
        <input id="count" type="number" value={rating.count} onChange={(e) => setRating({ ...rating, count: Number(e.target.value) })} />
      </div>
      <Button label="Add Product" buttonType="primary" onClick={handleAddProduct} />
    </div>
  );
};

export default AddProductForm;
