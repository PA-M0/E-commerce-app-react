import React from 'react';
import styles from './ProductPageSkeleton.module.scss';

const ProductPageSkeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonImage} />
      <div className={styles.skeletonDetails}>
        <div className={styles.skeletonLine} />
        <div className={styles.skeletonLine} />
        <div className={styles.skeletonLine} />
        <div className={styles.skeletonLine} />
      </div>
    </div>
  );
};

export default ProductPageSkeleton;
