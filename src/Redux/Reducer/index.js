import {combineReducers} from 'redux';
import {DESTROY_SESSION} from '../Constant/actionTypes';

import Film from './Film';
import User from './User';
import Login from './Login';
import ListDeleteFilm from './ListDeleteFilm'
import Generic from './Generic'
import RestoreFilm from './RestoreFilm'
import pageListFilm from './pageListFilm'


const appReducer = combineReducers({
    film: Film,
    user: User,
    login: Login,
    generic: Generic,
    listDeleteFilm: ListDeleteFilm,
    restoreFil: RestoreFilm,
    pageListFilm: pageListFilm

});

const rootReducer = (state, action) => {
  if (action.type === DESTROY_SESSION) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
