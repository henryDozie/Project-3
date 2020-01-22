import React, { Component  } from "react";
import { registerUser } from "../services/api_helper";

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
    console.log(name);
    console.log(value);
    this.setState({
      [name]: value
    });
  };

  handleRegister = async (e) => {
    e.preventDefault();
    const res = await registerUser({
      username: this.state.username,
      password: this.state.password
    });
    console.log(res);
  }

  render() {
    console.log(this.state.username);
    console.log(this.state.password);

    return (
      <div>
        {/* <h4>Register</h4> */}
        <form
          className="register"
          onSubmit={e =>
            this.handleRegister(e)
          }
        >
          {/* <label htmlFor="username">Username</label> */}
          <input
            type="text"
            name="username"
            // value={this.state.username}
            onChange={this.handleChange}
            required
            className="userPass"
            placeholder="username"
          />
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            name="password"
            // value={this.state.password}
            onChange={this.handleChange}
            required
            placeholder="password"
            className="userPass"
          />
          <input className="submit" type="submit" value="Create Account" />
          <button onClick={e => this.props.handleBack(e)}>Login</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
