import {LoginActions} from './type';
import {loginStart} from './contants';

export const Login = (): LoginActions => ({
  type: loginStart,
});
