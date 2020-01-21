import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="header">
      <span className="logo">
        <Link to="/home">Logo</Link>
      </span>
      <span className="logReg">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </span>
    </nav>
  );
};

export default Header;