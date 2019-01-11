import { AUTH_USER, AUTH_USER_ERROR } from '../actions';

export interface AuthState {
  authenticated: string,
  errorMessage?: string,
}

export function defaultAuthState() {
  return {
    authenticated: 'default',
  };
}

export function authReducer(state: AuthState = defaultAuthState(), action: any): AuthState {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: action.payload,
      };
    case AUTH_USER_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}