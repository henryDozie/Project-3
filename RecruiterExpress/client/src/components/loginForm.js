import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onChange = async e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <form
          className="login"
          onSubmit={e =>
            this.props.handleLogin(e, {
              username: this.state.username,
              password: this.state.password
            })
          }
        >
          <input
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            required
            className="userPass"
          />
          
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.onChange}
            required
            className="userPass"
          />
          <input className="submit" type="submit" value="Login" />
          <button onClick={e => this.props.handleRegister(e)}>Register</button>

          {/* <Link to="/register">Register</Link> */}
        </form>
      </div>
    );
  }
}

export default LoginForm;
