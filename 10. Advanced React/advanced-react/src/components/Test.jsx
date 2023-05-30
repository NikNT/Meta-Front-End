import React from "react";
import Counter from "./Counter";

const Test = () => {
  const props = { title: "tiramisu", cal: 400 };
  const element = <Counter title="cake" {...props} cal={500} />;
  console.log(element.props);
  return <div>{null}</div>;
};

export default Test;
