import {combineReducers} from 'redux';
import {DESTROY_SESSION} from '../Constant/actionTypes';

import Film from './Film';
import User from './User';
import Login from './Login';


const appReducer = combineReducers({
    film: Film,
    user: User,
    login: Login

});

const rootReducer = (state, action) => {
  if (action.type === DESTROY_SESSION) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
