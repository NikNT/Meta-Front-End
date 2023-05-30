import React, { useEffect, useState } from "react";

const ToggleUseEffect = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    document.title = toggle
      ? "Welcome to Little Lemon"
      : "Using useEffect Hook";
  }, [toggle]);
  return (
    <div>
      <h1>Using useEffect Hook</h1>
      <button onClick={handleToggle}>Toggle</button>
      {toggle && <h2>Welcom to Little Lemon</h2>}
    </div>
  );
};

export default ToggleUseEffect;
