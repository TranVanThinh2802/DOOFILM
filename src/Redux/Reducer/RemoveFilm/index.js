import {LOAD_DELETE_FILM_SUCCESS} from '../../Constant/actionTypes'

const initialState = {
   data:[]
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_DELETE_FILM_SUCCESS:{
          return{
              ...state,
              listFilm: action.payload
          }
      }
      default: {
        return state;
      }
    }
  };
  // Exports
  export default userReducer;