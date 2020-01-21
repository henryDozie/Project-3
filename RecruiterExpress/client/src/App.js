import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Jobs from "./components/jobs";
import { loginUser, registerUser, verifyUser } from "./services/api_helper";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Recruiters from "./components/recruiters";
// import Home from "./components/home";
import CreateJob from "./components/createJob";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      errorText: "",
      jobTitle: ['Software Engineer', 'Computer Science', 'Architecture'],
      location: ['New York', 'New Jersey', 'Conneticut', 'Virginia', 'Orlando'],
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
    console.log(this.state.currentUser);
    return (
      <div className="App">
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
          handleLogin={this.handleLogin}
        />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        {this.state.errorText && (
          <h2 className="error">{this.state.errorText}</h2>
        )}

        <Route
          path="/register"
          render={() => <RegisterForm handleRegister={this.handleRegister} />}
        />
        <Route path="/recruiters" render={() => <Recruiters />} />
        <Route
          path="/createJob"
          render={() => <CreateJob currentUser={this.state.currentUser} />}
        />
        <Route path="/jobs" render={() => <Jobs />} />
        <Route path="/home" render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Footer />
      </div>
    );
  }
}
export default App;


