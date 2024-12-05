import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar-container ${isScrolled ? "hidden" : ""}`}>
      <div className="logo-container">
        <img src="" alt="logo" />
        <h1>EW's Academy</h1>
      </div>
      <nav>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Programs">Programs</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/Careers">Careers</Link></li>
          <li><Link to="/Login">LMS Login</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>
    </header>
  );
}

export default Navbar;
