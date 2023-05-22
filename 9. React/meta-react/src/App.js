// import { useState } from "react";
// import FormUseState from "./components/FormUseState";
// import { GuessNumber } from "./components/GuessNumber";
// import Heading from "./components/Heading";
// import Login from "./components/Login";
// import Profile from "./components/Profile";
// import { LoginContext } from "./components/Contexts/LoginContext";
// import Homepage from "./components/Homepage";
// import AboutMe from "./components/AboutMe";
// import { Route, Routes, Link } from "react-router-dom";
// import { Week } from "./components/Week";
// import Image from "./components/Image";
// import { Video } from "./components/Video";
// import { AudioComponent } from "./components/Audio";

import "./App.css";
import { Calculator } from "./components/Calculator";

function App() {
  // const [word, setWord] = useState("Hey There!");

  // const clickHandler = () => {
  //   setWord("Okay, Bye!");
  // };
  // const [username, setUsername] = useState("");
  // const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="App">
      <Calculator />
      {/* <Link to="/">HomePage</Link>
      <Link to="about-me">AboutMe</Link>
      <Image />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
      <Week />
      <Video />
      <AudioComponent />
      <LoginContext.Provider
        value={{ showProfile, setShowProfile, username, setUsername }}
      >
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
      <GuessNumber />
      <FormUseState />
      <Heading message={word} />
      <button onClick={clickHandler}>Bye</button> */}
    </div>
  );
}

export default App;
