import {LOAD_LIST_FILM_DELETE_SUCCESS, REMOVE_LISTFILM_DELETED} from '../../Constant/actionTypes'

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
    case REMOVE_LISTFILM_DELETED: {
      return{
        ...state,
        listFilm:{
          data: state.listFilm.data.filter(item=>item.id != action.payload)
        }
      }
    }
    default: {
      return state;
    }
  }
};
// Exports
export default userReducer;