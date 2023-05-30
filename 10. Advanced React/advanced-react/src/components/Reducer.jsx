import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "earn") return { money: state.money + 10 };
  if (action.type === "spend") return { money: state.money - 10 };
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { money: 100 });
  return (
    <div>
      <h1>Wallet : {state.money}</h1>
      <button onClick={() => dispatch({ type: "earn" })}>Earn 💵</button>
      <button onClick={() => dispatch({ type: "spend" })}>Spend 💸</button>
    </div>
  );
};

export default Reducer;
