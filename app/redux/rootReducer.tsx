import {combineReducers} from 'redux';
import loginReducer from '../state/login/reducer';
import filmsState from '../state/films/reducer';
export const rootReducer = combineReducers({
  loginState: loginReducer,
  filmsState: filmsState,
});
export type RootState = ReturnType<typeof rootReducer>;
