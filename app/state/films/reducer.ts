import {FilmsState} from './interfaces';
import {Reducer} from 'redux';
import {FilmsAction} from './type';
import {
  getFilmsFailure,
  getFilmsStart,
  getFilmsSuccess,
  setSearchTitle,
} from './constants';

const initialState: FilmsState = {
  loading: false,
  data: undefined,
  value: undefined,
};

const filmsState: Reducer<FilmsState> = (
  state = initialState,
  action: FilmsAction,
): FilmsState => {
  switch (action.type) {
    case getFilmsStart:
      return {...state, loading: true};
    case getFilmsSuccess:
      return <FilmsState>{
        ...state,
        loading: false,
        data: 'payload' in action && action.payload,
      };
    case getFilmsFailure:
      return {...state, loading: false};
    case setSearchTitle:
      return <FilmsState>{
        ...state,
        value: 'payload' in action && action.payload,
      };
    default:
      return state;
  }
};
export default filmsState;
