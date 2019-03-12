import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import * as types from './actions/actionTypes';

// Style
import 'bootstrap/dist/css/bootstrap.min.css';

const middlewareToSaveUserToken = store => next => action => {
  if (action.type === types.LOGIN) {
    localStorage.setItem('token', action.payload);
  }
  next(action);
};

const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk, middlewareToSaveUserToken)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
