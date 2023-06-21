import React from "react";
import styles from "./CallToAction.module.css";
import heroImage from "./restauranfood.jpg";

const CallToAction = () => {
  return (
    <div className={styles.calltoaction}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Little Lemon</h1>
        <p className={styles.subHeading}>Chicago</p>
        <p className={styles.description}>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className={styles.reserveButton}>Reserve a Table</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={heroImage} className={styles.image} alt="Little Lemon Food" />
      </div>
    </div>
  );
};

export default CallToAction;
