import { AUTH_USER, AUTH_USER_ERROR } from '../actions';
import { AuthModel } from 'models/Auth';

// set type state's
export interface AuthState {
  authenticated: AuthModel,
  errorMessage?: string,
}
// set dafault state
export function defaultAuthState() {
  return {
    authenticated: {
      accessToken: '',
      tokenId: 0,
      userId: 0,
      messages: []
    },
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