import axios from "axios";

import config from '../utils/constants';

export const USER_LOGIN_START = 'USER_LOGIN_START';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

export const USER_SIGNUP_START = 'USER_SIGNUP_START';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_ERROR = 'USER_SIGNUP_ERROR';

export function login(data) {
  return async (dispatch, getState) => {
    const token = getState().authReducer.token;

    dispatch({ type: USER_LOGIN_START });
    axios.post(`${config.serverUrl}/login/`, data)
      .then(res => {
        dispatch({ token: res.token, user: res.user, type: USER_LOGIN_SUCCESS });
      })
      .catch(error => {
        dispatch({ error, type: USER_LOGIN_ERROR });
        throw error;
      });
  };
}

export function signup(data) {
  return async (dispatch, getState) => {
    const token = getState().authReducer.token;

    dispatch({ type: USER_LOGIN_START });
    axios.post(`${config.serverUrl}/login/`, data)
      .then(res => {
        dispatch({ token: res.token, user: res.user, type: USER_LOGIN_SUCCESS });
      })
      .catch(error => {
        dispatch({ error, type: USER_LOGIN_ERROR });
        throw error;
      });
  };
}