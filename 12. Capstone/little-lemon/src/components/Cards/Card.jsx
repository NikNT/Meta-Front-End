import React from "react";
import styles from "./Card.module.css";
import greek from "./greek salad.jpg";
import delivery from "./delivery.svg";

const salads = [
  {
    image: "https://example.com/greek_salad.jpg",
    title: "Greek Salad",
    price: 8.99,
    description:
      "A classic Greek salad with fresh lettuce, tomatoes, cucumbers, red onions, Kalamata olives, and feta cheese, topped with a tangy vinaigrette dressing.",
  },
  {
    image: "https://example.com/caesar_salad.jpg",
    title: "Caesar Salad",
    price: 7.99,
    description:
      "A traditional Caesar salad made with crisp romaine lettuce, Parmesan cheese, croutons, and a creamy Caesar dressing.",
  },
  {
    image: "https://example.com/cobb_salad.jpg",
    title: "Cobb Salad",
    price: 9.99,
    description:
      "A hearty Cobb salad with mixed greens, grilled chicken, avocado, tomatoes, bacon, hard-boiled eggs, and blue cheese, served with a choice of dressing.",
  },
  {
    image: "https://example.com/spinach_salad.jpg",
    title: "Spinach Salad",
    price: 6.99,
    description:
      "A nutritious spinach salad packed with fresh baby spinach leaves, sliced strawberries, goat cheese, candied pecans, and a balsamic vinaigrette dressing.",
  },
  {
    image: "https://example.com/waldorf_salad.jpg",
    title: "Waldorf Salad",
    price: 8.49,
    description:
      "A Waldorf salad made with crisp apples, celery, grapes, walnuts, and a creamy mayonnaise-based dressing, served on a bed of lettuce.",
  },
];

const Card = () => {
  return salads.map((salad) => (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={greek} alt="Food Image" />
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
  ));
};

export default Card;
