import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Product.module.scss";
import { getSpecificProduct } from "../services/ProductService.ts";
import { ProductShape } from "../components/common/types/product.ts";
import Button from "../components/common/button/Button.tsx";
import { FcRating } from "react-icons/fc";
import  Skeleton  from "../components/common/skeleton/ProductPageSkeleton"
import useLocalStorageState from 'use-local-storage-state'
import Alert from '../components/common/alert/Alert.tsx'
export interface CartProps{
  [productId: string]: ProductShape
}

const Product = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [product, setProduct] = useState<ProductShape | null>(null);
  const [isAddedToCart, setIsAddedToCart ] = useState<boolean>(false)
  const [cart,setCart] = useLocalStorageState<CartProps>('cart',{})
  const [alert, setAlert] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

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

  const addToCart = (product: ProductShape) => {
    setCart((prevCart) => {
      const existingProduct = prevCart[product.id];
      return {
        ...prevCart,
        [product.id]: existingProduct
          ? { ...existingProduct, count: existingProduct.count + 1 }
          : { ...product, count: 1 },
      };
    });
    showAlert('product added to your cart successfully', 'success');
    setIsAddedToCart(true);
  };


  // const addToCartHandle = (product: ProductShape) => {
  //   setCart((prevCart) => ({
  //     ...prevCart,
  //     [product.id]: product,
  //   }));
  //   showAlert('product added to your cart successfully', 'success');
  //   setIsAddedToCart(true);
  // }; 
  
  const showAlert = (message: string, type: "success" | "error" | "info") => {
    setAlert({ message, type });
   
  };
  
    
  
  const removeFromCart = () => {
    if (id) {
      const { [id]: removedProduct, ...rest } = cart;
      setCart(rest);
    }
    removeToCartAlert()
    setIsAddedToCart(false);
  };
  const removeToCartAlert = () =>{
    showAlert('your product removed from your cart successfully', 'success');

  }



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

  if(loading){
    return <div><Skeleton /></div>
  }
  if (error) {
    return <div> <p>{error}</p></div>;
  }
  if (!product) {
    return <p>No product found</p>;
  }

  return (
    <div className={styles.container}>
      {alert && <Alert message={alert.message} type={alert.type} />}
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
          <p className={styles.description}>{product.description}  <hr /></p>
        
          <label className={styles.label}>
             Size
            <select
              value={selectedSize}
              onChange={handleSizeChange}
              className={styles.select}
            >
              <option value="" >
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
          {isAddedToCart ? 
             <Button label="Remove from Cart"  buttonType="removeFromCart" onClick={removeFromCart}  />
            : <Button label="Add to Cart" onClick={() => addToCart(product)}  buttonType="addToCart" />
             }
          </div>
      </div>
    </div>
  );
};

export default Product;
