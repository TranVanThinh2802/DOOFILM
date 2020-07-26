import {all} from 'redux-saga/effects';
import loadListSagas from './loadListSagas';

export const UploadFile = function* root() {
  yield all([loadListSagas()]);
};
