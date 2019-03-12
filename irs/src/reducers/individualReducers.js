import * as types from '../actions/actionTypes';

export function user(user = { username: null, password: null }, action) {
  switch (action.type) {
    case types.ADD_INFO:
      return {
        username: action.payload.username,
        password: action.payload.password
      };
    case types.LOGOUT:
      return { username: null, password: null };
    default:
      return user;
  }
}

export function token(token = null, action) {
  switch (action.type) {
    case types.LOGIN:
      return action.payload;
    case types.LOGOUT:
      return null;
    default:
      return token;
  }
}

export function loading(loading = false, action) {
  switch (action.type) {
    case types.LOADING_ON:
      return true;
    case types.LOADING_OFF:
      return false;
    default:
      return loading;
  }
}
