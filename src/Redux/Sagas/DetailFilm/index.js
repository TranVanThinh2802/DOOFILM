import {all} from 'redux-saga/effects';
import detailFilmSaga  from './detailFilmSaga';

export const DetailFilmSagas = function* root() {
  yield all([detailFilmSaga()]);
};

