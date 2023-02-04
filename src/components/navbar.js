import React from "react";
import navImage from "../assets/navImage.png";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img
            src={navImage}
            width="30"
            height="30"
            className="image d-inline-block align-top"
            alt=""
          />
          &nbsp;TIS
        </a>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/">
              Home
            </a>
            <a className="nav-item nav-link" href="/Investments">
              Inversiones
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
