import React from "react";
import styles from "./Title.module.css";

const Title = ({ title }) => {
  return (
    <div>
      <div className={styles.titulo}>{title}</div>
    </div>
  );
};

export default Title;
