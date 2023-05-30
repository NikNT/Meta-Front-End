import React, { useState } from "react";
import useConsoleLog from "../useConsole";

const Counter = () => {
  const [count, setCount] = useState(0);
  useConsoleLog(count);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
