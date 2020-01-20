import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/jobs">Jobs</Link>
      <Link to="/login">Login / Register</Link>
      <button onClick={props.handleLogout}>Logout</button>
    </nav>
  );
};

export default Header;