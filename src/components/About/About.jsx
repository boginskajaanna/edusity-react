import React from "react";
import styles from "./About.module.css";
import aboutImg from "../../assets/images/content/about.png";
import playIcon from "../../assets/images/icons/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.about__inner}>
          <div className={styles.about__left}>
            <img className={styles.about__img} src={aboutImg} alt="about img" />
            <button
              onClick={() => {
                setPlayState(true);
              }}
            >
              <img className={styles.about__play} src={playIcon} alt="play icon" />
            </button>
          </div>
          <div className={styles.about__right}>
            <h3 className={styles.about__title}>ABOUT UNIVERSITY</h3>
            <h4 className={styles.about__subtitle}>Nutriting Tomorrow's Leaders Today</h4>
            <p className={styles.about__text}>
              Embark on a transformative educational journey with our university's comprehensive education
              programs. Our cutting-edge curricilum is designed to empower students with the knowledge, skills
              and experiences need to excel in the dynamic field of education.
            </p>
            <p className={styles.about__text}>
              With a focus on innovation, hands-on learning and personalized mentionship, our programs prepare
              aspiring educators to make a meaningful impact in classrooms, schools and communities.
            </p>
            <p className={styles.about__text}>
              Whether you aspire to become a teacher, administrator, counselor, or educational leader, our
              diverse range of programs offers the perfect pathway to achieve your goals and unlock your full
              potential in shaping the future of education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
