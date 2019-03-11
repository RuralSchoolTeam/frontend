import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login/Login';
import Register from './components/Registration/Register';
import Whoyouare from './components/Whoyouare/Whoyouare';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/whoyouare" component={Whoyouare} />
      </div>
    );
  }
}

export default App;
