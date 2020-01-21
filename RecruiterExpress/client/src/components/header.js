import React from "react";
import { Link } from "react-router-dom";
import About from '../components/about'


const Header = (props) => {
    return (
       
        <div>
        <nav>
            <ul class="topnav">
            <li><Link to="/" class="active">Home </Link></li>
            <li><Link to="/jobs">Jobs </Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li class="right"><Link to="/About">About US</Link></li>
            </ul>
        </nav>
        
        </div>
       
    );
};

export default Header;

