import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false
    }
  }

  submitButton = (e) => {
    this.setState({
      isClicked: true
    })
  }

  render() {
    return (
      <nav className="header">
        <span className="logo">
          <Link to="/home">Logo</Link>
          <Link to="/about">About</Link>
        </span>
        {!this.state.isClicked &&
          <span className="logReg">
            <button onClick={this.submitButton}><Link to="/login">Login</Link></button>
            <button onClick={this.submitButton}><Link to="/register">Register</Link></button>
          </span>
        }
      </nav >
    );
  };
}

export default Header;