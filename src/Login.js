import React from "react";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [pw, setPw] = useState("");
  const [dataFromPHP, setDataFromPHP] = useState("");
  const redirect = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, pw };
    console.log(user);

    axios
      .post(
        "http://localhost/php_project1/php_login_api/login_backend.php",
        JSON.stringify(user)
      )
      .then((res) => {
        console.log(res.data);
        setDataFromPHP(res.data);
      });

    // if (dataFromPHP["loginError"] === "Username and Password matches") {
    //   //on successful login, redirect user to homepage
    //   console.log("redirecting");
    //   redirect("/");
    // }

    // fetch("http://localhost/php_project1/php_login_api/backend.php", {
    //   method: "POST",
    //   // headers: {
    //   //   Accept: "application/json",
    //   //   "Content-Type": "application/json",
    //   // },
    //   body: JSON.stringify(user),
    // })
    //   .then(() => console.log("success"))
    //   // .then((response) => response.json())
    //   // .then((res2) => console.log(res2))
    //   .catch((err) => console.log(err));
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
  return (
    <div className="container">
      <h2>Login</h2>
      <div className="error-msg">{dataFromPHP["loginError"]}</div>
      {/* on successful login, redirect user to homepage */}
      <div>
        {dataFromPHP["loginError"] == "Username and Password matches"
          ? redirect("/")
          : ""}
      </div>
      <form
        action="http://localhost/php_backend/login_backend.php"
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
          <input
            type="submit"
            value="Login"
            name="submit"
            onClick={handleSubmit}
          />
        </div>

        <p>
          Not a user? Click
          <Link to="/signup" className="signup-link">
            {" "}
            here{" "}
          </Link>
          to sign up
        </p>
      </form>
    </div>
  );
}

export default Login;
