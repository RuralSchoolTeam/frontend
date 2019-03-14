import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login/Login';
import Register from './components/Registration/Register';
import Whoyouare from './components/Whoyouare/Whoyouare';
import MainNav from './components/Navigation/MainNav';
import DashboardPage from './components/Dashboard/Dashboard';
import ChooseOrg from './components/Organization/ChooseOrg';
import AddOrg from './components/Organization/AddOrg';
import singleIssue from './components/Dashboard/singleIssue';
import editIssueForm from './components/Dashboard/editIssueForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MainNav />
          <switch>
            <Route exact path="/" component={DashboardPage} />
          </switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/whoyouare" component={Whoyouare} />
          <Route exact path="/choose-organization" component={ChooseOrg} />
          <Route exact path="/add-organization" component={AddOrg} />
          <Route path="/issues/:id" component={singleIssue} />
          <Route path="/issues/edit" component={editIssueForm} />
        </div>
      </Router>
    );
  }
}

export default App;
