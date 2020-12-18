import {combineReducers} from 'redux';
import loginReducer from '../state/login/reducer';
export const rootReducer = combineReducers({
  loginState: loginReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
