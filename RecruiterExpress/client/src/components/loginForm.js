import React, { Component } from "react";
import { Link } from "react-router-dom";


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoggedIn: false
    };
  }

  onChange = async e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      isLoggedIn: true
    });
  };

  render() {
    return (
      <form
        className="login"
        onSubmit={e =>
          this.props.handleLogin(e, {
            username: this.state.username,
            password: this.state.password
          })
        }
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.onChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onChange}
          required
        />
        <input className="submit" type="submit" value="Login" />
        <Link to="/register">Register</Link>
      </form>
    );
  }
}

export default LoginForm;