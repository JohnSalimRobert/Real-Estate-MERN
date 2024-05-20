import "./navbar.scss";
import logo from "../../../public/logo.png";

function Navbar() {
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
        <a href="/" className="register">Sign Up</a>
      </div>
    </nav>
  );
}

export default Navbar;
