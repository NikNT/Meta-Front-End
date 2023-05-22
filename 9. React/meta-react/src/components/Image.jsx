import React from "react";
import hoodie from "../assets/black-hoodie.jpeg";
// import styles from "./Image.module.css";

const Image = () => {
  const randomImage = "https://shorturl.at/cswNZ";
  return (
    <div>
      <img src={randomImage} alt="" />
      <img
        src={require("../assets/black-hoodie.jpeg")}
        alt="Second Black Hoodie"
        height={15.625}
      />
      <img
        src={require("../assets/black-hoodie.jpeg")}
        alt="Second Black Hoodie"
        height={31.25}
      />

      <img
        src={require("../assets/black-hoodie.jpeg")}
        alt="Second Black Hoodie"
        height={62.5}
      />
      <img
        src={require("../assets/black-hoodie.jpeg")}
        alt="Second Black Hoodie"
        height={125}
      />
      <img
        src={require("../assets/black-hoodie.jpeg")}
        alt="Second Black Hoodie"
        height={250}
      />
      <img src={hoodie} alt="Black Hoodie" height={500} />
      <img
        src={require("../assets/black-hoodie.jpeg")}
        alt="Second Black Hoodie"
        height={250}
      />
      <img
        src={require("../assets/black-hoodie.jpeg")}
        alt="Second Black Hoodie"
        height={125}
      />
      <img
        src={require("../assets/black-hoodie.jpeg")}
        alt="Second Black Hoodie"
        height={62.5}
      />
      <img
        src={require("../assets/black-hoodie.jpeg")}
        alt="Second Black Hoodie"
        height={31.25}
      />
      <img
        src={require("../assets/black-hoodie.jpeg")}
        alt="Second Black Hoodie"
        height={15.625}
      />
    </div>
  );
};

export default Image;
