import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const activeNav = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        #OFFGRIDLIVING
      </Link>
      <div className="header-right">
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeNav : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeNav : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/homes"
          style={({ isActive }) => (isActive ? activeNav : null)}
        >
          Homes
        </NavLink>
        <Link to="login" className="login-link">
          <img src="../images/avatar-icon.png" className="login-icon" alt="" />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </div>
    </header>
  );
}

export default Header;
