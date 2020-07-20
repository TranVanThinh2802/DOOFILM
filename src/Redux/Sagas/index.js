import {all} from 'redux-saga/effects';
import {FilmSagas} from './Film'
import {UserSagas} from './User'
import {LoginSagas} from './Login'

export function* rootSagas(){
    yield all([
        FilmSagas(),
        UserSagas(),
        LoginSagas()
    ]);
}
