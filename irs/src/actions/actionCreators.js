import * as types from './actionTypes';
import axios from '../axios/axios';

export const login = (name, password) => dispatch => {
  dispatch({
    type: types.LOADING_ON
  })
  axios.post('https://international-rural-school.herokuapp.com/api/auth/login', {username: name, password: password})
    .then(res => {
      dispatch({ type: types.LOGIN, payload: res.data.payload });
      dispatch({
        type: types.ADD_INFO,
        payload: {
          username: name,
          password: password
        }
      });
      dispatch({
        type: types.LOADING_OFF
      })
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: types.LOADING_OFF
      });
    });
};

export const register = (name, password) => dispatch => {
  console.log('registering', name, password)
  dispatch({
    type: types.REGISTERING
  })
  axios.post('https://international-rural-school.herokuapp.com/api/auth/register', {username: name, password: password})
  .then(res => {
    dispatch({
      type: types.REGISTER_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    console.log(err)
    dispatch({
      type: types.REGISTER_FAIL,
      payload: err
    })
  })
}

export const logout = () => {
  return {
    type: types.LOGOUT
  };
};

export const loadingOn = () => {
  return {
    type: types.LOADING_ON
  };
};

export const loadingOff = () => {
  return {
    type: types.LOADING_OFF
  };
};
