import {LOAD_LIST_FILM_DELETE_SUCCESS} from '../../Constant/actionTypes'

// Initial State
const initialState = {
    listFilm: {
      data: []
    }
};
// Redux: Counter Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LIST_FILM_DELETE_SUCCESS:{
        return{
            ...state,
            listFilm: {
              data: action.payload
            }
            // {...state.listFilm, ...action.payload }
        }
    }
    default: {
      return state;
    }
  }
};
// Exports
export default userReducer;