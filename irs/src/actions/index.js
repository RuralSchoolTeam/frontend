import axios from 'axios';

export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const LOGGING_IN = 'LOGGING_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = (name, password) => dispatch => {
  dispatch({
    type: LOGGING_IN
  });
  axios
    .post('https://international-rural-school.herokuapp.com/api/auth/login', { username: name, password: password })
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token
      });
    })
    .catch(err =>
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data
      })
    );
};

export const REGISTERING = 'REGISTERING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const register = (credentials) => dispatch => {
  dispatch({
    type: REGISTERING
  });
  axios
    .post('https://international-rural-school.herokuapp.com/api/auth/register', { credentials })
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: REGISTER_FAIL,
        payload: err
      })
    );
};

export const FETCHING_ISSUES = 'FETCHING_ISSUES';

export const getIssues = () => dispatch => {
  dispatch({ type: FETCHING_ISSUES });
  axios
    .get('https://international-rural-school.herokuapp.com/api/issues')
    .then(res => {
      console.log(res);
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERROR, payload: err });
    });
};
// export const FETCH_SUCCESS = 'FETCH_SUCCESS';
// export const FETCH_FAIL = 'FETCH_FAIL';

export const ADDING_ISSUE = 'ADDING_ISSUE';
export const DELETING_ISSUE = 'DELETING_ISSUE';

export const addIssue = issue => dispatch => {
  dispatch({ type: ADDING_ISSUE });
  axios
    .post('https://international-rural-school.herokuapp.com/api/issues', issue)
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
};

export const deleteIssue = id => dispatch => {
  dispatch({ type: DELETING_ISSUE });
  axios
    .delete(`https://international-rural-school.herokuapp.com/api/issues/${id}`)
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
};

export const UPDATE_ISSUE = 'UPDATE_ISSUE'

export const updateIssue = (id, issue) => dispatch => {
  dispatch({ type: UPDATE_ISSUE });
  axios
    .put(`https://international-rural-school.herokuapp.com/api/issues/${id}`, issue)
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
}