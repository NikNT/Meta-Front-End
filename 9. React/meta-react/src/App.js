import { useState } from "react";
import "./App.css";
// import FormUseState from "./components/FormUseState";
// import { GuessNumber } from "./components/GuessNumber";
import Heading from "./components/Heading";

function App() {
  const [word, setWord] = useState("Hey There!");

  const clickHandler = () => {
    setWord("Okay, Bye!");
  };

  return (
    <div className="App">
      {/* <GuessNumber /> */}
      {/* <FormUseState /> */}
      <Heading message={word} />
      <button onClick={clickHandler}>Bye</button>
    </div>
  );
}

export default App;
