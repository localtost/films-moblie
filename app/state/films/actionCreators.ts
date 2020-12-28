import {
  getFilms,
  getFilmsFailure,
  getFilmsStart,
  getFilmsSuccess,
  setSearchTitle,
} from './constants';
import {FilmsAction} from './type';

export interface FilmItem {
  Favorite: boolean;
  id: string;
  Plot: string;
  Title: string;
  Poster: string;
}
export const getFilmsData = (): FilmsAction => ({
  type: getFilms,
});
export const getFilmsDataStart = (): FilmsAction => ({
  type: getFilmsStart,
});
export const getFilmsDataFailure = (): FilmsAction => ({
  type: getFilmsFailure,
});
export const getFilmsDataSuccess = (data: Array<FilmItem>): FilmsAction => ({
  type: getFilmsSuccess,
  payload: data,
});
export const setSearchValue = (value: string): FilmsAction => ({
  type: setSearchTitle,
  payload: value,
});
