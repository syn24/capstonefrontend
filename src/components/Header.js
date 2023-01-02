import React from "react";
import logo from "../assets/logo1.png";

const Header = () => {
  return (
   
    <div className="container flex justify-between items-center">
      <a href="/" className="logo flex">
        <img src={logo} className="logo" alt="little lemon logo"/>
      </a>
      <header>
       Hello1
      </header>
      </div>
  );
};

export default Header;