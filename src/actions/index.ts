import axios from 'axios';

const API = 'https://api.vs12.nwaj.ru/v1/user/authentication';

export const AUTH_USER = 'AUTH_USER';
export const AUTH_USER_ERROR = 'AUTH_USER_ERROR';

export const signin = (formProps, callback) => async dispatch => {
  try {
    // save response in response variable
    const response = await axios.post(API, {
      'authentication': formProps
    });
    dispatch({ type: AUTH_USER, payload: response.data });
    // save accesstoken in localstorage for authentification all page
    localStorage.setItem('token', response.data.accessToken);
    // trigger callback function for move to home router
    callback();
  } catch (e) {
    // trigger error
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

// tried but not working code
// import { Action, Dispatch } from 'redux';
// import { AuthModel } from 'models/Auth';

// export const ACTION_SIGNIN_FETCH = 'SIGNIN_FETCH';
// export const ACTION_SIGNIN_FETCH_SUCCESS = 'SIGNIN_FETCH_SUCCESS';
// export const ACTION_SIGNIN_FETCH_ERROR = 'SIGNIN_FETCH_ERROR';

// export interface IActionSigninFetch extends Action {
//   type: 'SIGNIN_FETCH'
// }

// export interface IActionSigninFetchSuccess extends Action {
//   type: 'SIGNIN_FETCH_SUCCESS',
//   payload: AuthModel
// }

// export interface IActionSigninFetchError extends Action {
//   type: 'SIGNIN_FETCH_ERROR',
//   payload: string
// }

// export type AppActions =
//   IActionSigninFetch |
//   IActionSigninFetchSuccess|
//   IActionSigninFetchError;

// function dispatchFetchSigninProgress(): IActionSigninFetch {
//   return {
//     type: ACTION_SIGNIN_FETCH
//   };
// }

// function dispatchFetchSigninSuccess(payload: AuthModel): IActionSigninFetchSuccess {
//   return {
//     type: ACTION_SIGNIN_FETCH_SUCCESS,
//     payload
//   };
// }

// function dispatchFetchSigninError(e: Error): IActionSigninFetchError {
//   return {
//     type: ACTION_SIGNIN_FETCH_ERROR,
//     payload: e.message
//   };
// }

// export function actionFetchSignin(formProps: any, callback: any) {
//   return (dispatch: Dispatch) => {
//     dispatch(dispatchFetchSigninProgress());
//     return axios.post(API, {
//       'authentication': formProps
//     })
//     .then((res) => {
//       // save accesstoken in localstorage for authentification all page
//       localStorage.setItem('token', res.data.accessToken);
//       // trigger callback function for move to home router
//       callback();
//       return dispatch(dispatchFetchSigninSuccess(res.data));
//     })
//     .catch((e: Error) => {
//       return dispatch(dispatchFetchSigninError(e));
//     });
//   };
// }