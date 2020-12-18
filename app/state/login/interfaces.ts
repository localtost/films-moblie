import {loginStart, loginFailure, loginSuccess} from './contants';
import {Action} from 'redux';
export interface LoginState {
  loading: boolean;
  auth: boolean;
  data: User | undefined;
}
export interface User {
  username: string;
  password: string;
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
