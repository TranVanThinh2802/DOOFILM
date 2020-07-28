import {all} from 'redux-saga/effects';
import loadFindFilmSaga from './loadFindFilmSaga'

export const FindFilmSagas = function* root() {
    yield all([loadFindFilmSaga()]);
  };