import React from "react";
import { NavLink } from "react-router-dom";
import navImage from "../assets/navImage.png";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="logo" to={"/"}>
          <img
            src={navImage}
            width="40"
            height="40"
            className="image d-inline-block align-top"
            alt=""
          />
          &nbsp;TIS
        </NavLink>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
                textDecoration: "none",
                marginRight: "10px",
              })}
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
                textDecoration: "none",
                marginRight: "10px",
              })}
              to={"Investments"}
            >
              Investments
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
