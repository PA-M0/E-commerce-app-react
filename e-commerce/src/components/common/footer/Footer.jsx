// Footer.js
import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h2>About Us</h2>
          <p>
            We provide excellent services to our customers. Our aim is to deliver high-quality products and ensure customer satisfaction.
          </p>
        </div>
        <div className={styles.footerSection}>
          <h2>Quick Links</h2>
          <ul className={styles.links}>
            <li><a href="/" className={styles.link}>Home</a></li>
            <li><a href="/about" className={styles.link}>About</a></li>
            <li><a href="/services" className={styles.link}>Services</a></li>
            <li><a href="/contact" className={styles.link}>Contact</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h2>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Main Street, Your City, Your Country</p>
        </div>
        <div className={styles.footerSection}>
          <h2>Follow Us</h2>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        &copy; {new Date().getFullYear()} Your Company | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
