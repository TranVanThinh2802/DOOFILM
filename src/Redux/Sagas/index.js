import {all} from 'redux-saga/effects';
import {FilmSagas} from './Film'

export function* rootSagas(){
    yield all([
        FilmSagas()
    ]);
}
