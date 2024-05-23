import { useState } from "react";
import "./navbar.scss";
import logo from "/logo.png";
import menu from "/menu.png";

function Navbar() {
    const [open, setOpen] = useState(false);
    
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img
            src={logo}
            alt="Robert Estate Logo"
            aria-label="Robert Estate Logo"
          />
          <span>RobertEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign In</a>
        <a href="/" className="register">
          Sign Up
        </a>
        <div className={open ? "menuIcon active": "menuIcon"}>
          <img src={menu} alt="mobile menu" onClick={() => setOpen(prev => !prev)}></img>
        </div>
      <div className={open ? "menu active" : "menu"}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
        <a href="/">Sign in</a>
        <a href="/">Sign up</a>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
