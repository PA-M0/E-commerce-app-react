
import { React, useState } from 'react';
import styles from './Header.module.scss';
import { Outlet, Link } from "react-router-dom";
import { Drawer } from '../drawer/Drawer.tsx'
function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
 
  return (
    <>
      <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <img src="/public/logo.svg" alt="LOGO." width="150px" height="30px" />
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
       
      </nav>
      <div>
      <img  className={styles.shoppingBag} src="/public/shopping-bag.svg" alt="shopping-bag" width={25} height={25} onClick={() => setIsDrawerOpen(true)} />
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <p>Drawer</p>
      </Drawer>
    </div>
    </header>
    

    

    <Outlet />
    </>

  );
}

export default Header;
