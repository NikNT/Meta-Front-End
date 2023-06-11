import React from "react";
import littleLemonLogo from "./Logo.svg";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <img
              src={littleLemonLogo}
              className={styles.logo}
              alt="Little Lemon Logo"
            />
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Reservations</a>
          </li>
          <li>
            <a href="">Order Online</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
