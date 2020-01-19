import React, { Component } from "react";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form
        className="register"
        onSubmit={e =>
          this.props.handleRegister(e, {
            username: this.state.username,
            password: this.state.password
          })
        }
      >
        <h2>Register</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          required
        />
        <input className="submit" type="submit" value="Create Account" />
      </form>
    );
  }
}

export default RegisterForm;
