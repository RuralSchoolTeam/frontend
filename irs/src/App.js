import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
