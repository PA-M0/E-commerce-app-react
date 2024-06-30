// Header.js
import React from 'react';
import styles from './Header.module.scss';
import { CiShoppingCart } from "react-icons/ci";
import { Outlet, Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <img src="/public/logo.svg" alt="LOGO." width="150px" height="100px" />
        </a>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
          <Link to="/shop" className={styles.navLink}>Shop</Link>
          </li>
          <li className={styles.navItem}>
          <Link to="/about" className={styles.navLink}>About</Link>
          </li>
          <li className={styles.navItem}>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
          </li>
        </ul>
        <CiShoppingCart />

      </nav>
    </header>
    <Outlet />
    </>

  );
}

export default Header;
