import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            username: "",
            password: ""
        }
    }
    handleChange = (e) => {
        const {name, value } =e.target
        this.setState({
            [name] : value
        })
    }

    render(){
        return(
            <div class="container">
            <form onSubmit={(e) => this.props.handleLogin(e, {username: this.state.username, password: this.state.password})}>
                <div class="row">
                <div class="col-25">    
                <label htmlFor="username">Username</label>
                </div>
                <div class="col-75">
                <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                />
                </div>
                </div>
                <div class="row">
                <div class="col-25">    
                <label htmlFor="password">Password</label>
                </div>
                <div class="col-75">
                <input
                type="text"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                />
                </div>
                </div>
                <input type="submit"/>
                {/* <Link to = "/register">Register</Link> */}
            </form>
            </div>
        )
    }
}