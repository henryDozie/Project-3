import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import { loginUser, registerUser, verifyUser } from "./services/api_helper";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Recruiters from "./components/recruiters";
// import Home from "./components/home";
import CreateJob from "./components/createJob";
import Jobs from "./components/jobs";

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
    return (
      <div className="App">
        <Header />
        <nav>
          {this.state.currentUser ? (
            <div>
              <p>Hello, {this.state.currentUser.username}</p>
              <CreateJob
                jobTitle={this.state.jobTitle}
                location={this.state.location}
                currentUser={this.state.currentUser}
              />
              {/* <CreateJob /> */}
              <button class="logout" onClick={this.handleLogout}>Logout</button>
            </div>
          ) : (
              <Link to="/login"></Link>
            )}
        </nav>
        {this.state.errorText && (
          <p className="error">{this.state.errorText}</p>
        )}
        <main>
          <Switch>
            <Route
              path="/jobs"
              render={() => <Jobs />}
            />
            <Route path="/about" render={() => <About />}
            />
            <Route
              path="/login"
              render={() => <LoginForm handleLogin={this.handleLogin} />}
            />
            <Route path="/createJob" render={() => <CreateJob />}
            />
            <Route
              path="/register"
              render={() => <RegisterForm handleRegister={this.handleRegister} />}
            />
            <Route
              path="/"
              render={() => <Home />}
            />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;


