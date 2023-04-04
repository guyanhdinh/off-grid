import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  const activeDashboard = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeDashboard : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeDashboard : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeDashboard : null)}
        >
          Reviews
        </NavLink>
        <NavLink
          to="homes"
          style={({ isActive }) => (isActive ? activeDashboard : null)}
        >
          Homes
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
