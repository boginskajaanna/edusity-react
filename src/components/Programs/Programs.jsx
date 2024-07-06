import React from "react";
import styles from "./Programs.module.css";
import Title from "../Title/Title";

import program1 from "../../assets/images/content/program-1.png";
import program2 from "../../assets/images/content/program-2.png";
import program3 from "../../assets/images/content/program-3.png";
import programCaption1 from "../../assets/images/icons/program-icon-1.png";
import programCaption2 from "../../assets/images/icons/program-icon-2.png";
import programCaption3 from "../../assets/images/icons/program-icon-3.png";

const Programs = () => {
  return (
    <section className={styles.programs} id="programs">
      <div className="container">
        <Title title="Our Program" subtitle="What We Offer"/>
        <ul className={styles.programs__list}>
          <li className={styles.programs__item}>
            <img src={program1} alt="program img" />
            <a className={styles.programs__caption} href="#!">
              <img src={programCaption1} alt="graduation icon" />
              <p className={styles.programs__text}>Graduation Degree</p>
            </a>
          </li>
          <li className={styles.programs__item}>
            <img src={program2} alt="program img" />
            <a className={styles.programs__caption} href="#!">
              <img src={programCaption2} alt="master icon" />
              <p className={styles.programs__text}>Master Degree</p>
            </a>
          </li>
          <li className={styles.programs__item}>
            <img src={program3} alt="program img" />
            <a className={styles.programs__caption} href="#!">
              <img src={programCaption3} alt="post graduation icon" />
              <p className={styles.programs__text}> Post Graduation</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Programs;
