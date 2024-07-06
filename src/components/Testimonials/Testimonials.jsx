import React, { useRef } from "react";
import styles from "./Testimonials.module.css";
import Title from "../Title/Title";
import nextIcon from "../../assets/images/icons/next-icon.png";
import backIcon from "../../assets/images/icons/back-icon.png";
import userPhoto1 from "../../assets/images/content/user-1.png";
import userPhoto2 from "../../assets/images/content/user-2.png";
import userPhoto3 from "../../assets/images/content/user-3.png";
import userPhoto4 from "../../assets/images/content/user-4.png";

const Testimonials = () => {

    const slider = useRef();
    let tX = 0;

    const slideForward = () => {
        if (tX > -50) {
            tX -= 25;
        }
        slider.current.style.transform = `translateX(${tX}%)`;
    };
    
    const slideBackward = () => {
        if (tX < 0) {
          tX += 25;
        }
        slider.current.style.transform = `translateX(${tX}%)`;
    };


  return (
    <section className={styles.testimonials} id="testimonials">
      <div className="container">
        <div className={styles.testimonials__inner}>
          <Title title="TESTIMONIALS" subtitle="What Student Says" />
          <div className={styles.testimonials__slider}>
            <button className={styles.next_btn} onClick={slideForward}>
              <img className={styles.next_icon} src={nextIcon} alt="next btn" />
            </button>
            <button className={styles.back_btn} onClick={slideBackward}>
              <img className={styles.back_icon} src={backIcon} alt="back btn" />
            </button>
            <div className={styles.testimonials__slides}>
              <ul ref={slider} className={styles.testimonials__list}>
                <li className={styles.testimonials__slide}>
                  <div className={styles.slide__inner}>
                    <div className={styles.slide__user}>
                      <img src={userPhoto1} alt="user" />
                      <div className={styles.slide__info}>
                        <h3 className={styles.slide__title}>Emilia Simons</h3>
                        <span className={styles.slide__location}>Edusity, USA</span>
                      </div>
                    </div>
                    <p className={styles.slide__descr}>
                      Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                      The supportive community, state-of-the-art facilities, and commitment to academic
                      excellence have truly exceeded my expectations.
                    </p>
                  </div>
                </li>
                <li className={styles.testimonials__slide}>
                  <div className={styles.slide__inner}>
                    <div className={styles.slide__user}>
                      <img src={userPhoto2} alt="user" />
                      <div className={styles.slide__info}>
                        <h3 className={styles.slide__title}>Jared Thompson</h3>
                        <span className={styles.slide__location}>Edusity, USA</span>
                      </div>
                    </div>
                    <p className={styles.slide__descr}>
                      Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                      The supportive community, state-of-the-art facilities, and commitment to academic
                      excellence have truly exceeded my expectations.
                    </p>
                  </div>
                </li>
                <li className={styles.testimonials__slide}>
                  <div className={styles.slide__inner}>
                    <div className={styles.slide__user}>
                      <img src={userPhoto3} alt="user" />
                      <div className={styles.slide__info}>
                        <h3 className={styles.slide__title}>Lilia Rice</h3>
                        <span className={styles.slide__location}>Edusity, USA</span>
                      </div>
                    </div>
                    <p className={styles.slide__descr}>
                      Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                      The supportive community, state-of-the-art facilities, and commitment to academic
                      excellence have truly exceeded my expectations.
                    </p>
                  </div>
                </li>
                <li className={styles.testimonials__slide}>
                  <div className={styles.slide__inner}>
                    <div className={styles.slide__user}>
                      <img src={userPhoto4} alt="user" />
                      <div className={styles.slide__info}>
                        <h3 className={styles.slide__title}>Florian Wirth</h3>
                        <span className={styles.slide__location}>Edusity, USA</span>
                      </div>
                    </div>
                    <p className={styles.slide__descr}>
                      Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                      The supportive community, state-of-the-art facilities, and commitment to academic
                      excellence have truly exceeded my expectations.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
