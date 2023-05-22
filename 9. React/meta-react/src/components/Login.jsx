import React, { useContext } from "react";
import styles from "./Login.module.css";
import { LoginContext } from "./Contexts/LoginContext";

const Login = () => {
  const { setUsername, setShowProfile } = useContext(LoginContext);
  return (
    <div className={styles.body}>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" />
      </div>
      <div>
        <button
          onClick={() => {
            setShowProfile(true);
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
