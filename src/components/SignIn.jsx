import { useState } from "react";
import styles from "./signin.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

export default function SignIn() {
  const [showSignup, setShowSignup] = useState(false);

  const switchToSignup = () => {
    setShowSignup(true);
  };

  const switchToLogin = () => {
    setShowSignup(false);
  };

  return (
    <div className={styles.myBackground}>
      <div>
        {showSignup ? (
          <SignupForm onSwitchToLogin={switchToLogin} />
        ) : (
          <LoginForm onSwitchToSignup={switchToSignup} />
        )}
      </div>
    </div>
  );
}
