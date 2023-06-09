import React from "react";
import styles from "./CardSkeleton.module.scss";
const CardSkeleton = () => {
  return (
    <div className={styles.Card}>
      <div className={`${styles.header} ${styles.skeleton}`}> </div>
      <div className={styles.details}>
        <div className={styles.skeleton}></div>
        <div className={styles.skeleton}></div>
        <div className={styles.skeleton}></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
