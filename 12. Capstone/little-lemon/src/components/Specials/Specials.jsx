import React from "react";
import styles from "./Specials.module.css";
import Cards from "./Cards/Cards";

const Specials = () => {
  return (
    <div className={styles.specials}>
      <div className={styles.sectionHeading}>
        <p className={styles.specialHeading}>This weeks specials</p>
        <button className={styles.btn}>Online Menu</button>
      </div>
      <div className={styles.cards}>
        <Cards />
      </div>
    </div>
  );
};

export default Specials;
