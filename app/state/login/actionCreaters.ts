import { TestLogin } from './type';
import { login, logout } from './contants';
import { User } from './interfaces';

export const Login = (data: User): TestLogin => ({
  type: login,
  payload: data,
});
export const Logout = (): TestLogin => ({
  type: logout,
});
