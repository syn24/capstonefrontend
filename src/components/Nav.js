import React from "react";
import '../styles/Nav.css'

const Nav = () => {
  return (
   
    <nav className="flex justify-between items-center font-semibold md:mr-10">
    <ul className="flex">
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