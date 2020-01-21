import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { loginUser, registerUser, verifyUser } from "./services/api_helper";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import CreateJob from "./components/createJob";
import Jobs from "./components/jobs";
import Home from "./components/home";
import About from "./components/about";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      errorText: "",
      jobTitle: ['Software Engineer', 'Computer Science', 'Architecture'],
      location: ['New York', 'New Jersey', 'Conneticut', 'Virginia', 'Orlando']
    };
  }
  handleLogin = async (e, loginData) => {
    e.preventDefault();
    if (!loginData.username || !loginData.password) {
      this.setState({
        errorText: "You must supply a username And password"
      });
    } else {
      e.preventDefault();
      const currentUser = await loginUser(loginData);
      this.setState({
        currentUser,
        errorText: ""
      });
    }
  };
  handleRegister = async (e, registerData) => {
    e.preventDefault();
    console.log(registerData)
    if (!registerData.username || !registerData.password) {
      this.setState({
        errorText: "You must supply a username And password"
      });
    } else {
      const currentUser = await registerUser(registerData);
      this.setState({
        currentUser
      });
    }
  };
  handleVerify = async () => {
    const currentUser = await verifyUser();
    console.log(currentUser);

    if (currentUser) {
      this.setState({
        currentUser
      });
    }
  };

  handleLogout = () => {
    this.setState({
      currentUser: null
    });
    localStorage.removeItem("authToken");
  };
  componentDidMount() {
    this.handleVerify();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/login" render={() => <LoginForm handleLogin={this.handleLogin} />} />
        <Route path="/register" render={() => <RegisterForm handleRegister={this.handleRegister} />} />
        <nav className="main">
          {this.state.currentUser ? (
            <div>
              <p>Hello, {this.state.currentUser.username}</p>
              <CreateJob
                jobTitle={this.state.jobTitle}
                location={this.state.location}
                currentUser={this.state.currentUser}
              />
              <button onClick={this.handleLogout}>Logout</button>
            </div>
          ) : (<></>)}
          <Route path="/home" render={() => <Home jobTitle={this.state.jobTitle} location={this.state.location} />} />
          <Route path="/about" render={() => <About />}
          />
        </nav>
        {this.state.errorText && (<p className="error">{this.state.errorText}</p>)}
        <Footer />
      </div>
    );
  }
}

export default App;
