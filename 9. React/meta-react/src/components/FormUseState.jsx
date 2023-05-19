import React, { useState } from "react";

const FormUseState = () => {
  const [form, setForm] = useState({
    firstName: "Nikhil",
    lastName: "Tanwar",
    email: "nikhiltanwarnt@gmail.com",
  });

  return (
    <>
      <label htmlFor="firstname">Firstname: </label>
      <input
        type="text"
        name="firstname"
        value={form.firstName}
        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
      />

      <label htmlFor="lastName">Lastname: </label>
      <input type="text" name="lastName" />
      <h1>
        {form.firstName} {form.lastName}
      </h1>
    </>
  );
};

export default FormUseState;
