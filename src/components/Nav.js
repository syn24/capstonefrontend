import React from "react";
import logo from "../assets/logo1.png";

const Nav = () => {
  return (
   
    <nav >
      <ul className="flex">
          <a href="/" className="logo flex">
            <img src={logo} className="logo" alt="little lemon logo"/>
          </a>
    
      <li className="list-item">
        <a href="/home">Home</a>
      </li>
      <li className="list-item">
        <a href="/home">About</a>
      </li>
      <li className="list-item">
        <a href="/home">Menu</a>
      </li>
      <li className="list-item">
        <a href="/home">Reservations</a>
      </li>
      <li className="list-item">
        <a href="/home">Order Online</a>
      </li>
      <li className="list-item">
        <a href="/home">Login</a>
      </li>
    </ul>
  </nav>
  );
};

export default Nav;