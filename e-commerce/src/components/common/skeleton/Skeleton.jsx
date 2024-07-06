
import React from 'react';
import styles from './Skeleton.module.scss';

const SkeletonProduct = () => {
    return (
        <>
            <div className={styles.productSkeletonParent}>
                <div className={styles.productSkeleton}>
                    <div className={styles.imageSkeleton}></div>
                    <div className={styles.titleSkeleton}></div>
                    <div className={styles.descriptionSkeleton}></div>
                    <div className={styles.priceSkeleton}></div>
                </div>
            </div>
            <div className={styles.productSkeletonParent}>
                <div className={styles.productSkeleton}>
                    <div className={styles.imageSkeleton}></div>
                    <div className={styles.titleSkeleton}></div>
                    <div className={styles.descriptionSkeleton}></div>
                    <div className={styles.priceSkeleton}></div>
                </div>
            </div>


        </>

    );
}

export default SkeletonProduct;
