import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

// import CreateJob from "./createJob";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: false,
      username: "",
      password: ""
    };
  }

  handleRegister = e => {
    e.preventDefault();
    this.setState({
      register: true
    });
  };

  handleBack = e => {
    e.preventDefault();
    this.setState({
      register: false
    });
  };

  render() {
    return (
      <div className="header">
        <div className="logo"><h1>Logo</h1></div>
        <nav>
          <div>
          <ul>
          <li className="left"><Link to="/home">Home</Link></li>
          <li className="left"><Link to="/jobs">Jobs</Link></li>
          <li className="left"><Link to="/about">About</Link></li>
          {/* <Link to="/login">Login / Register</Link> */}
          {!this.state.register ? (
            <li className="right"><LoginForm
            handleRegister={this.handleRegister}
              handleLogin={this.props.handleLogin}
            /></li>
          ) : (
            <li className="right"><RegisterForm
                handleBack={this.handleBack}
                
              /></li>
          )}       
          {this.props.currentUser ? (
            <div>
             <p className="welcome">Hello , 
                {this.props.currentUser.username}</p>
               <li className="right"><Link to="/recruiters">Recruiters</Link></li>
               <li className="right"><Link to="/createJob">Post Jobs</Link></li>
               <li className="right"><button onClick={this.props.handleLogout}>Logout</button></li>
            </div>
          ) : (
            <div></div>
            )}
         </ul>
        </div>
        </nav>
      </div>
    );
  }
}
export default Header;
