import React, { useState } from "react";

const Goals = (props) => {
  const [formData, setFormData] = useState({ goal: "", by: "" });
  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({
      goal: "",
      by: "",
    });
  };

  return (
    <>
      <h1>Goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Goals..."
          name="goal"
          value={formData.goal}
          onChange={changeHandler}
        />
        <br />
        <input
          type="text"
          placeholder="By..."
          name="by"
          value={formData.by}
          onChange={changeHandler}
        />
        <br />
        <button>SubmitGoals</button>
      </form>
    </>
  );
};

const ListOfGoals = (props) => {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          {g.goal} {g.by}
        </li>
      ))}
    </ul>
  );
};

const AllGoals = () => {
  const [allGoals, setAllGoals] = useState([]);
  const addGoal = (goal) => {
    setAllGoals([...allGoals, goal]);
  };
  return (
    <>
      <Goals onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </>
  );
};

export default AllGoals;
