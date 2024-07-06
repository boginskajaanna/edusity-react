import React from "react";
import styles from "./Title.module.css";

const Title = ({title, subtitle}) => {
  return (
    <div className={styles.title__wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
    </div>
  );
};

export default Title;
