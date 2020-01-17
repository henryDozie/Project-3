import React, { Component } from 'react';
import {Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { loginUser, registerUser, verifyUser, restrict } from './services/api_helper';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import AllPosts from './components/createJob';
import CreatePost from './components/jobs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      errorText: ""
    }
  }

render() {
  return (
    <div className="App">
     
    </div>
  );
}
}
export default App;
