import React from "react";
import styles from "./Hero.module.css";
import darkArrow from "../../assets/images/icons/dark-arrow.png";

import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className="container">
        <div className={styles.hero__inner}>
          <div className={styles.hero__text}>
            <h1 className={styles.hero__title}>We Ensure better education for a better world</h1>
            <p className={styles.hero__descr}>
              Our cutting-edge curriculum is designed to empower studentss with the knowledge, skills and
              experiences needed to excel in the dynamic field of education
            </p>
            <Link to="programs" smooth={true} offset={-60} duration={300} className="btn">
              Explore more <img src={darkArrow} alt="arrow icon" />
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
