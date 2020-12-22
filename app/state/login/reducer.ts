import {LoginState} from './interfaces';
import {LoginActions, TestLogin} from './type';
import {Reducer} from 'redux';
import {
  login,
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
} from './contants';

const initialState: LoginState = {
  loading: false,
  data: undefined,
  auth: false,
};

const loginReducer: Reducer<LoginState> = (
  state: LoginState = initialState,
  action: LoginActions | TestLogin,
): LoginState => {
  switch (action.type) {
    case login:
      return {
        ...state,
        auth: true,
        data: 'payload' in action ? action.payload : undefined,
      };
    case logout:
      return {...state, auth: false};
    case loginStart:
      return {...state, loading: true};
    case loginSuccess:
      return {
        ...state,
        loading: false,
        data: 'payload' in action ? action.payload : undefined,
      };
    case loginFailure:
      return {...state, loading: false};
    default:
      return state;
  }
};
export default loginReducer;
