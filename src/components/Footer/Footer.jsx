import React from 'react';
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <p>© 2024 Edusity. All rights reserved.</p>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <a href="#!">Terms of Services</a>
            </li>
            <li className={styles.footer__item}>
              <a href="#!">Privacy Poliy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer
