import {all} from 'redux-saga/effects';
import loadListSagas from './loadListSagas';
import getListFilm from './getListFilm'

export const FilmSagas = function* root() {
  yield all([loadListSagas(), getListFilm()]);
};

