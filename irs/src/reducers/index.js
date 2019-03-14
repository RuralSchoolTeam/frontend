import { LOGGING_IN, LOGIN_SUCCESS, LOGIN_FAIL, REGISTERING, REGISTER_SUCCESS, REGISTER_FAIL, FETCHING_ISSUES, SUCCESS, ERROR, ADDING_ISSUE, DELETING_ISSUE, UPDATE_ISSUE } from '../actions/index';

export const initialState = {
  credentials: [],
  fetching: false,
  registering: false,
  loggingIn: false,
  fetchingIssues: false,
  issues: [],
  addingIssue: false,
  updatingIssue: false,
  deletingIssue: false,
  token: localStorage.getItem('token'),
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
    case FETCHING_ISSUES:
      return {
        ...state,
        fetchingIssues: true,
        error: null
      };
    case SUCCESS:
      return {
        ...state,
        issues: action.payload,
        error: null
      };
    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    case ADDING_ISSUE:
      return {
        ...state,
        addingIssue: true,
        error: null
      };
    case DELETING_ISSUE:
      return {
        ...state,
        deletingIssue: true,
        error: null
      };
    case UPDATE_ISSUE:
      return {
        ...state,
        updatingIssue: true,
        error: null
      }
    default:
      return state;
  }
};

export default reducer;
