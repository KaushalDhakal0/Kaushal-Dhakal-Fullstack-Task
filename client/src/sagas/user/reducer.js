import {
  LOGIN_USER_ERROR,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGOUT,
  REGISTER_USER_ERROR,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
} from "./types";

const initialState = {
  data: null,
  currentUser: null,
  token: null,
  registerSuccess: false,
  loginSuccess: false,
  loggingIn: false,
  error: null,
  registering: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_START:
      return { ...state, loggingIn: true, loginSuccess: false };

    case LOGIN_USER_ERROR:
      return {
        ...state,
        loggingIn: false,
        loginSuccess: false,
        error: action.message,
        token: null,
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loginSuccess: true,
        token: action.token,
        error: null,
        currentUser: action?.user
      };

    case REGISTER_USER_START:
      return { ...state, registering: true, registerSuccess: false };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        registering: false,
        registerSuccess: true,
        token: action.token,
        currentUser: action?.user
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        registering: false,
        registerSuccess: false,
        token: null,
      };

    case LOGOUT:
      return {
        ...state,
        loginSuccess: false,
        registerSuccess:false,
        currentUser: null,
        token: null,
        error: null
      }

    default:
      return state;
  }
}
