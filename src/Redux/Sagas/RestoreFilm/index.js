import {all} from 'redux-saga/effects';
import loadRestoreFilmSaga from './loadRestoreFilmSaga'

export const RestoreFilm = function* root() {
    yield all([loadRestoreFilmSaga()]);
  };