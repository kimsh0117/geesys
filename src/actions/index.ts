import { Action } from 'redux';
import axios from 'axios';

export interface IActionAuthFetch extends Action {

}

export interface IActionAuthFetchSuccess extends Action {

}

export interface IActionAuthFetchError extends Action {

}

export type AppActions =
  IActionAuthFetch |
  IActionAuthFetchSuccess|
  IActionAuthFetchError;

export const AUTH_USER = 'auth_user';
export const AUTH_USER_ERROR = 'auth_user_error';

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('https://api.vs12.nwaj.ru/v1/user/authentication', {
      'authentication': formProps
    });
    dispatch({ type: AUTH_USER, payload: response.data });
    localStorage.setItem('token', response.data.accessToken);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_USER_ERROR, payload: 'failed' });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: '',
  };
};