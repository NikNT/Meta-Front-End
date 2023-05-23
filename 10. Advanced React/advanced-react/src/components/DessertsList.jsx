import React from "react";

export const DessertsList = ({ data }) => {
  let filteredDesserts = data
    .filter((dessert) => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories);
  let mappedDesserts = filteredDesserts.map((dessert) => (
    <li>
      {dessert.name} - {dessert.calories} cal
    </li>
  ));
  return <ul>{mappedDesserts}</ul>;
};
