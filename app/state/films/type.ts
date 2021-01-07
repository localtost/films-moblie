import {
  GetFilmsSuccess,
  GetFilmsFailure,
  GetFilmsStart,
  SetSearchValue,
  GetFilms,
} from './interfaces';

export type FilmsAction =
  | GetFilmsStart
  | GetFilmsSuccess
  | GetFilmsFailure
  | SetSearchValue
  | GetFilms;
