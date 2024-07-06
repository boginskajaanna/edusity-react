import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logoImg from "../../../assets/images/logo.png";
import menuIcon from "../../../assets/images/icons/menu-icon.png";

import { Link } from "react-scroll";

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
}

  return (
    <nav className={styles.nav}>
      <a className={styles.nav__logolink} href="#!">
        <img className={styles.nav__logo} src={logoImg} alt="logo" />
      </a>
      <ul className={`${styles.nav__list} ${mobileMenu ? "" : styles.mobile__hide}`}>
        <li className={styles.nav__item}>
          <Link to="hero" smooth={true} offset={-100} duration={300}>
            Home
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="programs" smooth={true} offset={-60} duration={300}>
            Program
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="about" smooth={true} offset={-100} duration={300}>
            About us
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="campus" smooth={true} offset={-100} duration={300}>
            Campus
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="testimonials" smooth={true} offset={-100} duration={300}>
            Testimonials
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="contact" smooth={true} offset={0} duration={300} className="btn">
            Contact us
          </Link>
        </li>
      </ul>
      <button className={styles.nav__btn} onClick={toggleMenu}>
        <img className={styles.nav__icon} src={menuIcon} alt="menu icon" />
      </button>
    </nav>
  );
};

export default Navbar;
