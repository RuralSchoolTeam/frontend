import axios from '../axios/axios';

export const LOGGING_IN = 'LOGGING_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = "LOGIN_FAIL";

export const login = (name, password) => dispatch => {
  dispatch({
    type: LOGGING_IN
  });
  axios.post('https://international-rural-school.herokuapp.com/api/auth/login', {username: name, password: password})
    .then(res => {
      localStorage.setItem('token', res.data.token)
      dispatch({
        type: LOGIN_SUCCESS, 
        payload:res.data.token
      });
    })
    .catch(err => 
      dispatch({ 
        type: LOGIN_FAIL, 
        payload: err.response.data
      }));
};



export const REGISTERING = "REGISTERING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const register = (name, password) => dispatch => {
  dispatch({
    type: REGISTERING
  });
  axios.post('https://international-rural-school.herokuapp.com/api/auth/register', {username: name, password: password})
  .then(res => {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
  })
  .catch(err =>
    dispatch({
      type: REGISTER_FAIL,
      payload: err
    })
  )
}

// export const FETCHING = 'FETCHING';
// export const FETCH_SUCCESS = 'FETCH_SUCCESS';
// export const FETCH_FAIL = 'FETCH_FAIL';