import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login/Login';
import Register from './components/Registration/Register';
import Whoyouare from './components/Whoyouare/Whoyouare';
import MainNav from './components/Navigation/MainNav';
import DashboardPage from './components/Dashboard/Dashboard';

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
        </div>
      </Router>
    );
  }
}

export default App;
