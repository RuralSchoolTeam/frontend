import * as types from './actionTypes';
import axios from '../axios/axios';

export const login = (name, password) => dispatch => {
  dispatch(loadingOn());
  axios()({
    method: 'post',
    url: 'https://international-rural-school.herokuapp.com/api/auth/login',
    headers: {},
    data: {}
  })
    .then(res => dispatch({ type: types.LOGIN, payload: res.data.payload }))
    .then(res => {
      dispatch({
        type: types.ADD_INFO,
        payload: {
          username: name,
          password: password
        }
      });
      dispatch(loadingOff());
    })

    .catch(err => {
      dispatch(console.log(err));
      dispatch(loadingOff());
    });
};

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
