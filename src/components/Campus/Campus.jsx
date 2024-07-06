import React from "react";
import styles from "./Campus.module.css";
import Title from "../Title/Title";
import galleryImg1 from "../../assets/images/content/gallery-1.png";
import galleryImg2 from "../../assets/images/content/gallery-2.png";
import galleryImg3 from "../../assets/images/content/gallery-3.png";
import galleryImg4 from "../../assets/images/content/gallery-4.png";
// import whiteArrow from "../../assets/images/icons/white-arrow.png";



const Campus = () => {
  return (
    <section className={styles.campus} id="campus">
      <div className="container">
        <div className={styles.campus__inner}>
          <Title title="Gallery" subtitle="Campus Photos" />
          <div className={styles.campus__gallery}>
            <img src={galleryImg1} alt="gallery img" />
            <img src={galleryImg2} alt="gallery img" />
            <img src={galleryImg3} alt="gallery img" />
            <img src={galleryImg4} alt="gallery img" />
          </div>
          {/* <button className="btn accent-btn">
            See more here
            <img src={whiteArrow} alt="arrow icon" />
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Campus;
