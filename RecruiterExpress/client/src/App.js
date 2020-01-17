import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Footer from './components/footer';
import { loginUser, registerUser, verifyUser, restrict } from './services/api_helper';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import CreateJob from './components/createJob';
import Jobs from './components/jobs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      errorText: ""
    }
  }
  handleLogin = async (e, loginData) => {
    e.preventDefault();
    if (!loginData.username || !loginData.password) {
      this.setState({
        errorText: "You must supply a username And password"
      })
    } else {
      e.preventDefault();
      const currentUser = await loginUser(loginData);
      this.setState({
        currentUser,
        errorText: ""
      });
    }
  }
  handleRegister = async (e, registerData) => {
    e.preventDefault();
    if (!registerData.username || !registerData.password) {
      this.setState({
        errorText: "You must supply a username And password ya jerk!"
      })
    } else {
      const currentUser = await registerUser(registerData);
      this.setState({
        currentUser
      })
    }
  }
  handleVerify = async () => {
    const currentUser = await verifyUser();
    console.log(currentUser);

    if (currentUser) {
      this.setState({
        currentUser
      })
    }
  }
  
  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
  }
  componentDidMount() {
    this.handleVerify();
  }

    render(){
      return (
        <div className="App">
      <Footer/>
        </div>
      )
    }
  }

  export default App;
