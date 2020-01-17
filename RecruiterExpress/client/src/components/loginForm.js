import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div class="container">
                <form class="row" onSubmit={(e) => this.props.handleLogin(e, { username: this.state.username, password: this.state.password })}>

                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <input type="submit" />
                    {/* <Link to = "/register">Register</Link> */}
                </form>
            </div>
        )
    }
}