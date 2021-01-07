import { takeEvery, all } from 'redux-saga/effects';
import { getFilms } from './constants';
import { getFilmsData } from './sagas';

function* filmsWatcher() {
  yield takeEvery(getFilms, getFilmsData);
}

export default function* rootSagas() {
  yield all([filmsWatcher()]);
}
