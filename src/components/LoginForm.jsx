import { useState } from "react";
import styles from "./loginform.module.css";
import { Link } from "react-router-dom";

export default function LoginForm({ onSwitchToSignup }) {
  return (
    <div className={styles.login}>
      <form className={styles.form}>
        <h2>Sign In</h2>
        <input
          type="text"
          name="username"
          placeholder="Enter username/email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
        <p>
          <Link to="#">Forget password?</Link>
        </p>
        <div className={styles["button-container"]}>
          <button type="submit">Login</button>
        </div>
        <p>
          Don't have an account?{" "}
          <button onClick={onSwitchToSignup}>Signup</button>
        </p>
      </form>
    </div>
  );
}
