import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "./Navigation.scss";

function Navigation() {
  return (
    <nav className="nav">
      <div className="logo-container">
        <Link to="/" className="nav-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/search" className="nav-link">
            Search Results
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
