import {LoginFailure, LoginStart, LoginSuccess} from './interfaces';

export type LoginActions = LoginStart | LoginFailure | LoginSuccess;
