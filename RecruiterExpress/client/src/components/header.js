import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div>
        <img className="headerStyle" src="https://i.imgur.com/8o0vbRm.jpg"></img>
        <nav>
            {/* {props.currentUser ? (
  <div>
    <p>Hello, {props.currentUser.username}</p> */}
            <Link to="/login">Login/ </Link>
            <Link to="/Register">Register/ </Link>
            <Link to="/">Home/ </Link>
            <Link to="/Jobs">Jobs/ </Link>
            <Link to="/CreateJob">Create Job</Link>
            <button onClick={props.handleLogout}>Logout</button>
        </nav>
        </div>
    );
};

export default Header;

