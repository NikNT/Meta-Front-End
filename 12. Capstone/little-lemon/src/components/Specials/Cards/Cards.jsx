import React from "react";
import styles from "./Cards.module.css";
// import greek from "./greek salad.jpg";
import delivery from "./delivery.svg";

const salads = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1674486230302-5eb7699856f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Greek Salad",
    price: 8.99,
    description:
      "A classic Greek salad with fresh lettuce, tomatoes, cucumbers, red onions, Kalamata olives, and feta cheese, topped with a tangy vinaigrette dressing.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1078&q=80",
    title: "Caesar Salad",
    price: 7.99,
    description:
      "A traditional Caesar salad made with crisp romaine lettuce, Parmesan cheese, croutons, and a creamy Caesar dressing.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1562634117-6645bf4a9136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80",
    title: "Cobb Salad",
    price: 9.99,
    description:
      "A hearty Cobb salad with mixed greens, grilled chicken, avocado, tomatoes, bacon, hard-boiled eggs, and blue cheese, served with a choice of dressing.",
  },
];

const Cards = () => {
  return salads.map((salad) => (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src={salad.image} alt="Food" />
        </div>
        <div className={styles.cardTitle}>
          <p>{salad.title}</p>
          <p>$ {salad.price}</p>
        </div>
        <div className={styles.cardDescription}>
          <p>{salad.description}</p>
        </div>
        <div className={styles.cardFooter}>
          <p>Order Delivery</p>
          <img src={delivery} alt="Delivery Icon" />
        </div>
      </div>
    </div>
  ));
};

export default Cards;
