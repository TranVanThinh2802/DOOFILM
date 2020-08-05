import {all} from 'redux-saga/effects';
import loadListFilmDeleteSaga from './loadListFilmDeleteSaga';


export const ListFilmDeleteSagas = function* root() {
    yield all([loadListFilmDeleteSaga()]);
  };