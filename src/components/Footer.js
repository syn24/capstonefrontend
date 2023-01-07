import React from "react";
import logo from "../assets/logo2.png";

const Footer = () => {
  return (
   
    <footer className="flex justify-between w-full">
    <a href="/" className="flex footer-logo">
      <img src={logo} alt="logo" className="footer-logo"/>
    </a>

      <ul className="flex">
        <h4>Links</h4>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
      </ul>
      <ul className="flex">
          <h4>Contact</h4>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
      </ul>
      <ul>
          <h4>Social Media</h4>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>YouTube</li>
          <li>Twitters</li>
      </ul>
  </footer>
  );
};

export default Footer;