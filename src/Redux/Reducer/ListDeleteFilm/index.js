import {LOAD_LIST_FILM_DELETE_SUCCESS, REMOVE_LISTFILM_DELETED, LOAD_RESTORE_SUCCESS} from '../../Constant/actionTypes'

// Initial State
const initialState = {
    listFilm: []
};
// Redux: Counter Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LIST_FILM_DELETE_SUCCESS:{
        return{
            ...state,
            listFilm: action.payload
            // {...state.listFilm, ...action.payload }
        }
    }
    case LOAD_RESTORE_SUCCESS:{
      return{
          ...state,
          listFilm: state.listFilm.filter(item => item.id !== action.payload.id)
      }
    }
    case REMOVE_LISTFILM_DELETED: {
      return{
        ...state,
        listFilm: state.listFilm.data.filter(item=>item.id != action.payload)
      }
    }
    default: {
      return state;
    }
  }
};
// Exports
export default userReducer;