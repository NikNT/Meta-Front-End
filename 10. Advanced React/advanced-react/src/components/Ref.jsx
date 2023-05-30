import React, { useRef } from "react";

const Ref = () => {
  const focusInput = useRef(null);
  const focusHandler = () => {
    focusInput.current.focus();
  };
  return (
    <div>
      <h1>useRef Hook</h1>
      <input type="text" name="" ref={focusInput} />
      <button onClick={focusHandler}>Focus</button>
    </div>
  );
};

export default Ref;
