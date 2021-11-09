import React from "react";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [pw, setPw] = useState("");
  const [email, setEmail] = useState("");
  const [dataFromPHP, setDataFromPHP] = useState("");
  const redirect = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, pw, email };
    console.log(user);

    axios
      .post(
        "http://localhost/php_backend/signup_backend.php",
        JSON.stringify(user)
      )
      .then((res) => {
        console.log(res.data);
        setDataFromPHP(res.data);
      });
  };

  const usernameHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setUsername(e.target.value);
  };
  const pwHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setPw(e.target.value);
  };
  const emailHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  return (
    <div className="container">
      <h2>Sign Up</h2>
      <div className="error-msg">{dataFromPHP["signupError"]}</div>
      {/* on successful signup, redirect user to homepage */}
      {/* <div>
        {dataFromPHP["signupError"] == "New User created"
          ? redirect("/")
          : ""}
      </div> */}
      <form
        action="http://localhost/php_project1/php_login_api/backend.php"
        method="POST"
      >
        <div>
          <label for="username">Username: </label>
          <input
            type="text"
            name="username"
            value={username}
            id="username"
            onChange={usernameHandler}
          />
          <div className="error-msg">{dataFromPHP["usernameError"]}</div>
        </div>

        <div>
          <label for="password">Password: </label>
          <input
            type="text"
            name="password"
            value={pw}
            id="password"
            onChange={pwHandler}
          />
          <div className="error-msg">{dataFromPHP["passwordError"]}</div>
        </div>
        <div>
          <label for="email">Email: </label>
          <input
            type="text"
            name="email"
            value={email}
            id="email"
            onChange={emailHandler}
          />
          <div className="error-msg">{dataFromPHP["emailError"]}</div>
        </div>

        <div>
          <input
            type="submit"
            value="Sign Up"
            name="submit"
            onClick={handleSubmit}
          />
        </div>

        <p>
          Registered? Click
          <Link to="/login" className="signup-link">
            {" "}
            here{" "}
          </Link>
          to login
        </p>
      </form>
    </div>
  );
}

export default Login;
