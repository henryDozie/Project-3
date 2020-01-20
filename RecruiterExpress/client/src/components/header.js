import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav>
      <Link to="/home">Logo</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default Header;