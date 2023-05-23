import React from "react";

const data = [
  {
    id: "1",
    title: "Tiramisu",
    description: "Best Tiramisu",
    price: "$5.50",
  },
  {
    id: "2",
    title: "Lemon Ice Cream",
    description: "Mind blowing tast",
    price: "$4.50",
  },
  {
    id: "3",
    title: "Chocolate Mousse",
    description: "Unexplored Taste",
    price: "$6.00",
  },
];

export const Lists = () => {
  let item = data.map((food) => (
    <p>
      Enjoy {food.title} only at {food.price}
    </p>
  ));
  return <div>{item}</div>;
};
