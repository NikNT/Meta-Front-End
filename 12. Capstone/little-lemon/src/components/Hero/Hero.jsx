import React from "react";
import styles from "./Hero.module.css";
import heroImage from "./restauranfood.jpg";

const Hero = () => {
  return (
    <>
      <section>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h1 className={styles.heading}>Little Lemon</h1>
            <h2 className={styles.subHeading}>Chicago</h2>
            <p className={styles.content}>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button>Reserve a Table</button>
          </div>
          <div className={styles.right}>
            <img
              src={heroImage}
              alt="Hero Image"
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
