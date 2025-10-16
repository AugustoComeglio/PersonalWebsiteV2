import React from "react";
import styles from "./Title.module.css";

const Title = ({ Title }) => {
  return (
    <div>
      <div className={styles.titulo}>{Title}</div>
    </div>
  );
};

export default Title;
