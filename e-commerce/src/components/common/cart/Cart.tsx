import React from "react";
import { Link } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import { ProductShape } from '../types/product.ts';
import Button from "../button/Button";
import styles from "./Cart.module.scss";

export interface CartProps {
  [productId: string]: ProductShape & { count: number };
}

const Cart: React.FC = () => {
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {
    defaultValue: {},
  });

  const getTotalPrice = () => {
    return Object.values(cart || {})
      .reduce((total, product) => {
        if (!product.price || !product.count) {
          console.warn("Invalid product data", product);
          return total;
        }
        return total + product.price * product.count;
      }, 0)
      .toFixed(2);
  };

 

  const removeFromCart = (productId: string) => {
    const { [productId]: removedProduct, ...rest } = cart || {};
    setCart(rest);
  };

  const removeAllFromCart = () => {
    setCart({});
  };

  const updateProductCount = (productId: string, newCount: number) => {
    if (newCount <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart({
      ...cart,
      [productId]: {
        ...cart[productId],
        count: newCount,
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Basket</h1>
        <div className={styles.actions}>
          <Button
            buttonType="removeFromCart"
            onClick={removeAllFromCart}
            label="Clear Basket"
          />
        </div>
      </div>
      {Object.keys(cart || {}).length === 0 ? (
        <div className={styles.emptyCart}>
          Your cart is empty. <Link to="/shop">Go shopping</Link>
        </div>
      ) : (
        <div>
          <ul className={styles.cartList}>
            {Object.values(cart || {}).map((product) => (
              <li key={product.id} className={styles.cartItem}>
                <div className={styles.productInfo}>
                  <img
                    src={product.image}
                    width={50}
                    height={50}
                    alt={product.title}
                    className={styles.productImage}
                  />
                  <div className={styles.productDetails}>
                    <h2 className={styles.productTitle}>{product.title}</h2>
                    <div className={styles.productAttributes}></div>
                    <div className={styles.productCount}>
                      <Button
                        label="-"
                        buttonType="removeFromCart"
                        onClick={() =>
                          updateProductCount(product.id, product.count - 1)
                        }
                      />
                      <span>{product.count}</span>
                      <Button
                        label="+"
                        buttonType="removeFromCart"
                        onClick={() =>
                          updateProductCount(product.id, product.count + 1)
                        }
                      />
                    </div>
                  </div>
                  <div className={styles.productPrice}>
                    ${(product.price * product.count).toFixed(2)}
                    <Button
                      label="X"
                      onClick={() => removeFromCart(product.id)}
                      buttonType="removeFromCart"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.total}>
            <h2>Subtotal Amount: ${getTotalPrice()}</h2>
          </div>
          <div className={styles.checkout}>
            <Button label="CHECK OUT" buttonType="addToCart" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
