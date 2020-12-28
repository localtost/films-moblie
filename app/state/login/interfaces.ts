import {login, logout} from './contants';
import {Action} from 'redux';
export interface LoginState {
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
