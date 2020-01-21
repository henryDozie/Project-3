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
          <Link to="/home">Home</Link>
          <Link to="/jobs">Jobs</Link>
          {/* <Link to="/login">Login / Register</Link> */}
          {!this.state.register ? (
            <LoginForm
            handleRegister={this.handleRegister}
              handleLogin={this.props.handleLogin}
            />
          ) : (
              <RegisterForm
                handleBack={this.handleBack}
                
              />
          )}

          {this.props.currentUser ? (
            <div>
              <Link to="/recruiters">Recruiters</Link>
              <Link to="/createJob">Post Jobs</Link>
              <button onClick={this.props.handleLogout}>Logout</button>
            </div>
          ) : (
            <div></div>
          )}
        </nav>
      </div>
    );
  }
}
export default Header;
