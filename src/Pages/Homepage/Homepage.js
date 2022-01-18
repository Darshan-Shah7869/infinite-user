import React, { useEffect, useState } from "react";
import validator from "validator";
import { useHistory } from "react-router-dom";

import styles from "./Homepage.module.css";

const Homepage = (props) => {
  const history = useHistory();

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

  const closeIcon = (
    <svg
      className={`${styles.closeIcon}`}
      onClick={props.clicked}
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.41 11.0002L20.7 2.71019C20.8638 2.51888 20.9494 2.27281 20.9397 2.02113C20.93 1.76946 20.8256 1.53072 20.6475 1.35262C20.4694 1.17453 20.2307 1.0702 19.979 1.06047C19.7274 1.05075 19.4813 1.13636 19.29 1.30019L11 9.59019L2.70997 1.29019C2.52167 1.10188 2.26627 0.996094 1.99997 0.996094C1.73367 0.996094 1.47828 1.10188 1.28997 1.29019C1.10167 1.47849 0.995881 1.73388 0.995881 2.00019C0.995881 2.26649 1.10167 2.52188 1.28997 2.71019L9.58997 11.0002L1.28997 19.2902C1.18529 19.3798 1.10027 19.4902 1.04025 19.6142C0.980225 19.7383 0.946494 19.8734 0.941175 20.0111C0.935855 20.1489 0.959061 20.2862 1.00934 20.4145C1.05961 20.5428 1.13587 20.6594 1.23332 20.7568C1.33078 20.8543 1.44733 20.9305 1.57565 20.9808C1.70398 21.0311 1.84131 21.0543 1.97903 21.049C2.11675 21.0437 2.25188 21.0099 2.37594 20.9499C2.50001 20.8899 2.61033 20.8049 2.69997 20.7002L11 12.4102L19.29 20.7002C19.4813 20.864 19.7274 20.9496 19.979 20.9399C20.2307 20.9302 20.4694 20.8258 20.6475 20.6477C20.8256 20.4697 20.93 20.2309 20.9397 19.9792C20.9494 19.7276 20.8638 19.4815 20.7 19.2902L12.41 11.0002Z"
        fill="#1DD0AB"
      />
    </svg>
  );

  useEffect(() => {
    setLoginData({ email: "", password: "" });
    setSignupData({ name: "", password: "", email: "" });
  }, [showLogin]);

  useEffect(() => {
    setLoginEmailError("");
    setLoginPasswordError("");

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
            {closeIcon}
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
            {closeIcon}
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