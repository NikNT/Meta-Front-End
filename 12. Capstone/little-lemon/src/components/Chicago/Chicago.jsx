import React from "react";
import styles from "./Chicago.module.css";

const Chicago = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.title}>Little Lemon</p>
          <p className={styles.city}>Chicago</p>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            distinctio eveniet, perspiciatis veritatis dolore delectus! Officia
            accusantium, iste porro tempora tempore ab sed ea placeat, pariatur
            magnam expedita recusandae ad veritatis laudantium! Temporibus modi
            alias placeat recusandae iste blanditiis, ratione consequuntur,
            doloribus neque iure libero qui nulla mollitia dolor aliquid?
          </p>
        </div>
        <div className={styles.chicagoImgContainer}>
          <img
            src="https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className={styles.chicagoImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Chicago;
