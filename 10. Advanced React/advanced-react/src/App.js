import { Lists } from "./components/Lists";
import "./App.css";
import { DessertsList } from "./components/DessertsList";
import ControlledForm from "./components/ControlledForm";
import { FeedbackForm } from "./components/FeedbackForm";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <div className="App">
      {/* <Lists /> */}
      {/* <DessertsList data={desserts} /> */}
      <ControlledForm />
      <FeedbackForm />
    </div>
  );
}

export default App;
