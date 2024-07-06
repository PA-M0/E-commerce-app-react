// src/view/Product.jsx
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Product.module.scss";
import { getSpecificProduct } from "../services/ProductService.ts";
import { ProductShape } from "../components/common/types/product.ts";
import { AddToCartBtn } from "../components/common/button/AddToCartBtn.tsx";
import { FcRating } from "react-icons/fc";

const Product = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [product, setProduct] = useState<ProductShape | null>(null);

  const { id } = useParams();
  const API_URL = `https://fakestoreapi.com/products/${id}`;

  const sizes = ["Small", "Medium", "Large"];
  const colors = [
    "black",
    "magenta",
    "purple",
    "blue",
    "brown",
    "red",
    "turquoise",
    "orange",
  ];

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    getSpecificProduct(API_URL)
      .then((data) => {
        setProduct(data);

        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }
  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className={styles.container}>
      <Link to="/shop" className={styles.backLink}>
        &lt; Back to shop
      </Link>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img
            src={product.image}
            alt="Product"
            className={styles.productImage}
          />
        </div>
        <div className={styles.details}>
          <p className={styles.rate}>
            <FcRating /> {product.rating?.rate}
          </p>
          <h1 className={styles.name}>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          <hr />
          <label className={styles.label}>
            Lens Width and Frame Size
            <select
              value={selectedSize}
              onChange={handleSizeChange}
              className={styles.select}
            >
              <option value="" className="text-gray-300">
                --Select Size--
              </option>
              {sizes.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>
          <div className={styles.colors}>
            <span className={styles.label}>Choose Color</span>
            <div className={styles.colorOptions}>
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={`${styles.colorOption} ${
                    selectedColor === color ? styles.selected : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color)}
                />
              ))}
            </div>
          </div>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
          <button className={styles.button}>Remove From Basket</button>
          <AddToCartBtn />
        </div>
      </div>
    </div>
  );
};

export default Product;
