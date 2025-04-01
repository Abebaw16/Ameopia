import { useState } from "react";
import styles from "./signupform.module.css";
import { Link } from "react-router-dom";

export default function SignupForm({ onSwitchToLogin }) {
  return (
    <div className={styles.myBackground}>
      <div className={styles.signup}>
        <form className={styles.form}>
          <h2>Signup</h2>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            required
          />
          <input type="email" name="email" placeholder="Enter email" required />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            required
          />
          <button type="submit">Signup</button>
          <p>
            Already have an account?{" "}
            <button onClick={onSwitchToLogin}>Login</button>
          </p>
        </form>
        <div className={styles.footer}>
          <p>
            &copy;&nbsp;{new Date().getFullYear()} Ameopia. Unauthorized
            reproduction or distribution of any content on this site is
            prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}
