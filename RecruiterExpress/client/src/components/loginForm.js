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
        {/* <h4>Login</h4> */}
      <form
        className="login"
        onSubmit={e =>
          this.props.handleLogin(e, {
            username: this.state.username,
            password: this.state.password
          })
        }
      >
        
        {/* <label htmlFor="username">Username</label> */}
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.onChange}
          required
        />
        {/* <label htmlFor="password">Password</label> */}
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onChange}
          required
        />
        <input className="submit" type="submit" value="Login" />
        <button className="registerButton" onClick={e => this.props.handleRegister(e)}>Register</button>
        
        {/* <Link to="/register">Register</Link> */}
        </form>
        </div>
    );
  }
}

export default LoginForm;
