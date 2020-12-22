import {
  Login,
  LoginFailure,
  LoginStart,
  LoginSuccess,
  Logout,
} from './interfaces';

export type LoginActions = LoginStart | LoginFailure | LoginSuccess;
export type TestLogin = Login | Logout;
