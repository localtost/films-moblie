import {
  loginStart,
  loginFailure,
  loginSuccess,
  login,
  logout,
} from './contants';
import {Action} from 'redux';
export interface LoginState {
  loading: boolean;
  auth: boolean;
  data: User | undefined;
}
export interface User {
  username: string;
  password: string;
  confirm: string;
  role: number;
}
export interface Login extends Action {
  type: typeof login;
  payload: User;
}
export interface Logout extends Action {
  type: typeof logout;
}
export interface LoginStart extends Action {
  type: typeof loginStart;
}
export interface LoginSuccess extends Action {
  type: typeof loginSuccess;
  payload: User;
}
export interface LoginFailure extends Action {
  type: typeof loginFailure;
}
