import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  label: string;
  onClick: () => void;
  buttonType?: 'addToCart' | 'removeFromCart' | 'primary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, buttonType }) => {
  const buttonClass = buttonType ? styles[buttonType] : '';
  return (
    <button className={`${styles.button} ${buttonClass}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
