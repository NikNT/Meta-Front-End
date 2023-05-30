import React, { useEffect, useState } from "react";

const FetchUser = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=1")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]))
      .catch((err) => console.log(err));
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      {console.log(user)}
      <h1>FetchUser!</h1>
      <p>Gender: {user.gender}</p>
      <p>Name: {`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
      <img src={user.picture.large} alt="" />
    </div>
  ) : (
    <h2>Please Wait! Fetching Data...</h2>
  );
};

export default FetchUser;
