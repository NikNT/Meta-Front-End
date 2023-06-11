import React from "react";
import styles from "./Highlights.module.css";

const Highlights = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.topSection}>
          <p>This Weeks Specials!</p>
          <button>Online Menu</button>
        </div>
        <div className={styles.cardSection}></div>
      </div>
    </>
  );
};

export default Highlights;
