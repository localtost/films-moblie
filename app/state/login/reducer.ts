import {LoginState} from './interfaces';
import {LoginActions} from './type';
import {Reducer} from 'redux';
import {loginFailure, loginStart, loginSuccess} from './contants';

const initialState: LoginState = {
  loading: false,
  data: undefined,
  auth: false,
};

const loginReducer: Reducer<LoginState> = (
  state: LoginState = initialState,
  action: LoginActions,
): LoginState => {
  switch (action.type) {
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
