import React from "react";
import { NavLink as Link } from "react-router-dom";

const AccessibleNav = () => {
  return (
    <nav>
      <Link to="/about">About</Link>
      <Link to="/tech">About</Link>
      <Link to="/contact">About</Link>
    </nav>
  );
};

export default AccessibleNav;
