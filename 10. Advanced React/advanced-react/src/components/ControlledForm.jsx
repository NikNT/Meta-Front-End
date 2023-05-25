import React, { useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");
    setName("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button disabled={!name}>Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default ControlledForm;
