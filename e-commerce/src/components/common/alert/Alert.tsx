import React from "react";
import styles from "./Alert.module.scss";
import useState from 'react'

interface AlertProps {
  message: string;
  type: "success" | "error" | "info";
}


const Alert: React.FC<AlertProps> = ({ message, type }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }
  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      <span className={styles.message}>{message}</span>
      <button className={styles.closeButton} onClick={handleClose}>
        &times;
      </button>
    </div>
  );
};

export default Alert;
