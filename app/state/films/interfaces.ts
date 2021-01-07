import { Action } from 'redux';
import {
  getFilmsFailure,
  getFilmsSuccess,
  getFilmsStart,
  setSearchTitle,
  getFilms,
} from './constants';
import { FilmItem } from './actionCreators';


export interface FilmsState {
  loading: boolean;
  data: Array<FilmItem> | undefined;
  value: string | undefined;
}

export interface GetFilmsStart extends Action {
  type: typeof getFilmsStart;
}
export interface GetFilms extends Action {
  type: typeof getFilms;
}
export interface GetFilmsSuccess extends Action {
  type: typeof getFilmsSuccess;
  payload?: Array<FilmItem>;
}
export interface GetFilmsFailure extends Action {
  type: typeof getFilmsFailure;
}
export interface SetSearchValue extends Action {
  type: typeof setSearchTitle;
  payload: string;
}
