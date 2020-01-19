import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import { loginUser, registerUser, verifyUser } from "./services/api_helper";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import CreateJob from "./components/createJob";
import Jobs from "./components/jobs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      errorText: ""
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
    return (
      <div className="App">
        <Header />
        {this.state.errorText && (
          <p className="error">{this.state.errorText}</p>
        )}
        <main>
          <Switch>
            <Route path="/about" render={() => <About/>}
            />
            <Route
              path="/login"
              render={() => <LoginForm handleLogin={this.handleLogin} />}
            />
            <Route
              path="/register"
              render={() => <RegisterForm handleRegister={this.handleRegister} />}
            />
            <Route
              path="/"
              render={() => <Home />}
            />
            <Route
              path="/jobs"
              render={() => <Jobs />}
            />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;


