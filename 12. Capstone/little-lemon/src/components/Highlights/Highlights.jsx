import React from "react";
import styles from "./Highlights.module.css";
import Card from "../Cards/Card";

const Highlights = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.topSection}>
          <p>This Weeks Specials!</p>
          <button>Online Menu</button>
        </div>
        <div className={styles.cardSection}>
          <Card className={styles.flexItem} />
          {/* <Card className={styles.flexItem} />
          <Card className={styles.flexItem} />
          <Card className={styles.flexItem} /> */}
        </div>
      </div>
    </>
  );
};

export default Highlights;
