import {LoginState} from './interfaces';
import {TestLogin} from './type';
import {Reducer} from 'redux';
import {login, logout} from './contants';

const initialState: LoginState = {
  data: undefined,
  auth: false,
};

const loginReducer: Reducer<LoginState> = (
  state: LoginState = initialState,
  action: TestLogin,
): LoginState => {
  switch (action.type) {
    case login:
      return <LoginState>{
        ...state,
        auth: true,
        data: 'payload' in action && action.payload,
      };
    case logout:
      return {...state, auth: false};
    default:
      return state;
  }
};
export default loginReducer;
