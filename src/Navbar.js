import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h3 className="title">
        <Link to="/">Furrever Friends</Link>
      </h3>
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/petsforadoption">Pets For Adoption</Link>
        </li>
        <li>
          <Link to="/login">Login/Signup</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
