import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Booking from "./components/Booking/Booking";
import Homepage from "./components/Homepage";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
