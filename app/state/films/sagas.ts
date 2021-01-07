import { put, call, select } from 'redux-saga/effects';
import {
  getFilmsDataStart,
  getFilmsDataSuccess,
  getFilmsDataFailure,
  FilmItem,
} from './actionCreators';
import { fetchFilmsBySearch, fetchFilmsByTitle } from './api';
import { transformResponseData } from '../../helpers/transfromData';
import { SagaIterator } from '@redux-saga/core';
import { Alert } from 'react-native';

export function* getFilmsData(): SagaIterator {
  try {
    const { value } = yield select((state) => state.filmsState);
    yield put(getFilmsDataStart());
    const searchResponse = yield call(fetchFilmsBySearch, {
      searchTitle: value,
      searchPage: 1,
    });
    if (searchResponse && searchResponse.data.hasOwnProperty('Error')) {
      yield put(getFilmsDataFailure());
      Alert.alert(searchResponse.data.Error);
    }
    const newArray = getRequestArrayFromResponse(searchResponse.data.Search);
    const response = yield call(requestsFilms, newArray);
    yield put(getFilmsDataSuccess(transformResponseData(response)));
  } catch (error) {
    yield put(getFilmsDataFailure());
  }
}

const getRequestArrayFromResponse = (
  array: Array<FilmItem>,
): Array<Promise<void>> => array.map(({ Title }) => fetchFilmsByTitle(Title));

const requestsFilms = async (array: Array<Promise<void>>) =>
  await Promise.all(array);
