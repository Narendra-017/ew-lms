import React from "react";
import "./Navbar.css"
import {Link } from "react-router-dom"
function Navbar() {

  return (
    <header className="navbar-container">
      <div className="logo-container">
        <img src="" alt="logo" />
        <h1>EW's Academy</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/"></Link></li>
          <li><Link to="/Program">Programs</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/Careers">Careers</Link></li>
          <li><Link to="/Login">LMS Login</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
