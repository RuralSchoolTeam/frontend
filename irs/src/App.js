import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login/Login';
import Register from './components/Login/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
