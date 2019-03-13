import {
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTERING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../actions";

 export const initialState = {
  users: [],
  fetching: false,
  registering: false,
  loggingIn: false,
  token: localStorage.getItem("token"),
  error: null
};

 const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTERING:
      return {
        ...state,
        error: null,
        registering: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        error: null,
        token: action.payload,
        registering: false
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.payload,
        registering: false
      };
    case LOGGING_IN:
      return {
        ...state,
        error: null,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    default:
      return state;
  }
};

 export default reducer;