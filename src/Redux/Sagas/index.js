import {all} from 'redux-saga/effects';
import {FilmSagas} from './Film'
import {UserSagas} from './User'
import {LoginSagas} from './Login'
import {AddfilmSagas} from './Addfilm'
import {FindFilmSagas} from './FindFilm'
import {DeleteFilm} from './DeleteFilm'

export function* rootSagas(){
    yield all([
        FilmSagas(),
        UserSagas(),
        LoginSagas(),
        AddfilmSagas(),
        FindFilmSagas(),
        DeleteFilm()
    ]);
}
