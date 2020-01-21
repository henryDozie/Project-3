import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div>
        <img className="headerStyle" src="https://i.imgur.com/8o0vbRm.jpg"></img>
        <nav>
            <Link to="/">Home/ </Link>
            <Link to="/jobs">Jobs/ </Link>
            {/* <button onClick={props.handleLogout}>Logout</button> */}
        </nav>
        </div>
    );
};

export default Header;

