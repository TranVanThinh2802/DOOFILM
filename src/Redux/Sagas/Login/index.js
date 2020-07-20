import {all} from 'redux-saga/effects';
import loadLoginSagas from './loadLoginSaga';

export const LoginSagas = function* root() {
  yield all([loadLoginSagas()]);
};
