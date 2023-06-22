import React from "react";
import styles from "./Testimonials.module.css";
import user from "./user.png";

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.testimonialsHeading}>Testimonials</p>
        <div className={styles.testCardsContainer}>
          <div className={styles.testCard}>
            <div className={styles.cardImageContainer}>
              <img src={user} alt="" className={styles.cardImage} />
            </div>
            <p className={styles.cardCustomerName}>John Doe</p>
            <p className={styles.cardCustomerComment}>
              This is the best food I've ever had!
            </p>
          </div>
          <div className={styles.testCard}>
            <div className={styles.cardImageContainer}>
              <img src={user} alt="" className={styles.cardImage} />
            </div>
            <p className={styles.cardCustomerName}>John Doe</p>
            <p className={styles.cardCustomerComment}>
              This is the best food I've ever had!
            </p>
          </div>
          <div className={styles.testCard}>
            <div className={styles.cardImageContainer}>
              <img src={user} alt="" className={styles.cardImage} />
            </div>
            <p className={styles.cardCustomerName}>John Doe</p>
            <p className={styles.cardCustomerComment}>
              This is the best food I've ever had!
            </p>
          </div>
          <div className={styles.testCard}>
            <div className={styles.cardImageContainer}>
              <img src={user} alt="" className={styles.cardImage} />
            </div>
            <p className={styles.cardCustomerName}>John Doe</p>
            <p className={styles.cardCustomerComment}>
              This is the best food I've ever had!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
