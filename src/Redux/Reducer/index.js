import {combineReducers} from 'redux';
import {DESTROY_SESSION} from '../Constant/actionTypes';

import Film from './Film';


const appReducer = combineReducers({
    film: Film
});

const rootReducer = (state, action) => {
  if (action.type === DESTROY_SESSION) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
