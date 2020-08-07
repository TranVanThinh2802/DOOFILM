import {combineReducers} from 'redux';
import {DESTROY_SESSION} from '../Constant/actionTypes';

import Film from './Film';
import User from './User';
import Login from './Login';
import ListDeleteFilm from './ListDeleteFilm'
import Generic from './Generic'
import RestoreFilm from './RestoreFilm'


const appReducer = combineReducers({
    film: Film,
    user: User,
    login: Login,
    generic: Generic,
    listDeleteFilm: ListDeleteFilm,
    restoreFil: RestoreFilm

});

const rootReducer = (state, action) => {
  if (action.type === DESTROY_SESSION) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
