import React from "react";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
   
    <nav >
      <ul className="flex">
          <a href="/" className="logo flex">
            <img src={logo} className="logo" alt="little lemon logo"/>
          </a>
    
      <li className="list-item">
        <Link to="/">Homepage</Link>
      </li>
      <li className="list-item">
        <a href="/home">Menu</a>
      </li>
      <li className="list-item">
        <Link to="/booking">Reservation</Link>
      </li>
      <li className="list-item">
        <a href="/home">Login</a>
      </li>
    </ul>
  </nav>
  );
};

export default Nav;