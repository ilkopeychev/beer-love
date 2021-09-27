import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  const activeStyle = { color: "white", fontSize: "22px" };
  return (
    <div className="navbar">
      <div className="navbar-heading">
        <h1>Beans Love Beers</h1>
      </div>
      <div className="navbar-links">
        <ul>
          <NavLink to="/" exact={true} activeStyle={activeStyle}>
            {" "}
            <li>Home</li>
          </NavLink>
          <NavLink to="/favourites" activeStyle={activeStyle}>
            {" "}
            <li>Favourites</li>
          </NavLink>
          <NavLink to="/random" activeStyle={activeStyle}>
            {" "}
            <li>Random</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
