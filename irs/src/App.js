import React, { Component } from 'react';
import './App.css';

import Login from './components/Login/Login';
import Register from './components/Registration/Register';
import MainNav from './components/Navigation/MainNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        <Login />
        <Register />
        
      </div>
    );
  }
}

export default App;
