import {all} from 'redux-saga/effects';
import loadDeleteFilmSaga from './loadDeleteFilmSaga'

export const DeleteFilm = function* root() {
    yield all([loadDeleteFilmSaga()]);
  };