import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";

import Login from "./components/Login/Login";
import Register from "./components/Registration/Register";
import MainNav from "./components/Navigation/MainNav";
import DashboardPage from "./components/Dashboard/Dashboard";
import singleIssue from "./components/Dashboard/singleIssue";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MainNav />
          <Route
            exact
            path="/"
            render={() =>
              localStorage.getItem("token") ? (
                <DashboardPage />
              ) : (
                <Redirect to="/login" />
              )
            }
          />

          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/issues/:id" component={singleIssue} />
        </div>
      </Router>
    );
  }
}

export default App;
