import {
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTERING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  FETCHING_ISSUES,
  SUCCESS,
  ERROR,
  ADDING_ISSUE,
  DELETING_ISSUE,
  EDITFORM,
  EDITING,
  EDITED,
  FAILURE
} from '../actions/index';

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
  editing: false,
  edited: false,
  editForm: false,
  token: localStorage.getItem('token'),
  error: null,
  editId: null
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
    case EDITING:
      return {
        ...state,
        editing: true,
        error: null
      };
    case EDITED:
      return {
        ...state,
        issues: action.payload,
        edited: false,
        error: null
      };
    case EDITFORM:
      return {
        ...state,
        editForm: true,
        error: null
      };
    case FAILURE:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

export default reducer;
