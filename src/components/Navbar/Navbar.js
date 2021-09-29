import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { myContext } from "../context/context";
const Navbar = () => {
  const activeStyle = { color: "white", fontSize: "22px" };

  const { wallet } = useContext(myContext);
  return (
    <div
      className="navbar"
      style={
        wallet === "no wallet" ? { pointerEvents: "none", opacity: "0.4" } : {}
      }
    >
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
