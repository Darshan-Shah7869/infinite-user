import React, { useEffect, useState } from "react";
import validator from "validator";
import { useHistory } from "react-router-dom";

import styles from "./Homepage.module.css";

const Homepage = (props) => {
  const history = useHistory();

  // States

  const [showLogin, setShowLogin] = useState(true);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginEmailError, setLoginEmailError] = useState("");
  const [loginPasswordError, setLoginPasswordError] = useState("");
  const [signupNameError, setSignupNameError] = useState("");
  const [signupEmailError, setSignupEmailError] = useState("");
  const [signupPasswordError, setSignupPasswordError] = useState("");

  // Clear the state when you switch between login and signup

  useEffect(() => {
    setLoginData({ email: "", password: "" });
    setSignupData({ name: "", password: "", email: "" });
  }, [showLogin]);

  useEffect(() => {
    setLoginEmailError("");
    setLoginPasswordError("");

    // Validation for login

    if (loginData.email.length === 0) {
      setLoginEmailError("Email is required");
    }

    if (!validator.isEmail(loginData.email)) {
      setLoginEmailError("Enter valid email");
    }

    if (loginData.password.length === 0) {
      setLoginPasswordError("Password is required");
    }
  }, [loginData]);

  useEffect(() => {
    setSignupEmailError("");
    setSignupPasswordError("");
    setSignupNameError("");

    // Validation for Signup

    if (signupData.name.length === 0) {
      setSignupNameError("Name is required");
    }

    if (signupData.email.length === 0) {
      setSignupEmailError("Email is required");
    }

    if (!validator.isEmail(signupData.email)) {
      setSignupEmailError("Enter valid email");
    }

    if (signupData.password.length === 0) {
      setSignupPasswordError("Password is required");
    }
  }, [signupData]);

  return (
    <div>
      {showLogin ? (
        <div
          style={{ backgroundColor: "#1DD0AB" }}
          className={`${styles.popupBox}`}
        >
          <div className={`${styles.popup}`}>
            <div className={`${styles.title}`}>Inifnite Users</div>
            <input
              autoComplete="off"
              type="email"
              style={{ textTransform: "lowercase" }}
              placeholder="Email"
              className={`${styles.input}`}
              onChange={(e) => {
                setLoginData({ ...loginData, email: e.target.value });
              }}
            />
            <p className={`${styles.error}`}>{loginEmailError}</p>
            <input
              autoComplete="off"
              type="password"
              placeholder="Password"
              className={`${styles.input}`}
              onChange={(e) => {
                setLoginData({ ...loginData, password: e.target.value });
              }}
            />
            <p className={`${styles.error}`}>{loginPasswordError}</p>
            <button
              className={`${styles.btn}`}
              onClick={() => {
                props.auth();
                history.push("/users");
              }}
              disabled={
                loginEmailError.length !== 0 || loginPasswordError.length !== 0
              }
            >
              Login
            </button>
            <div
              onClick={() => {
                setShowLogin(false);
              }}
              className={`${styles.text}`}
            >
              New User? Sign up.
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{ backgroundColor: "#1DD0AB" }}
          className={`${styles.popupBox}`}
        >
          <div className={`${styles.popup}`}>
            <div className={`${styles.title}`}>JobFinder</div>
            <input
              autoComplete="off"
              type="text"
              placeholder="Name"
              className={`${styles.input}`}
              onChange={(e) => {
                setSignupData({ ...signupData, name: e.target.value });
              }}
            />
            <p className={`${styles.error}`}>{signupNameError}</p>
            <input
              autoComplete="off"
              type="email"
              signupError
              placeholder="Email"
              className={`${styles.input}`}
              onChange={(e) => {
                setSignupData({ ...signupData, email: e.target.value });
              }}
            />
            <p className={`${styles.error}`}>{signupEmailError}</p>
            <input
              autoComplete="off"
              type="password"
              placeholder="Password"
              className={`${styles.input}`}
              onChange={(e) => {
                setSignupData({ ...signupData, password: e.target.value });
              }}
            />
            <p className={`${styles.error}`}>{signupPasswordError}</p>
            <button
              disabled={
                signupEmailError.length !== 0 ||
                signupPasswordError.length !== 0 ||
                signupNameError.length !== 0
              }
              onClick={() => {
                props.auth();
                history.push("/users");
              }}
              className={`${styles.btn}`}
            >
              Signup
            </button>
            <div
              onClick={() => {
                setShowLogin(true);
              }}
              className={`${styles.text}`}
            >
              Already have an account? Login.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
