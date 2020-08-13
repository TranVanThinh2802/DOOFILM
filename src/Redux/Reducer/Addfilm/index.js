import {CREATE_FILM_SUCCESS, UPDATE_SHOWALERT} from '../../Constant/actionTypes'

const initialState = {
      data: [],
      showAlert: false,
};

// Redux: Counter Reducer
const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_FILM_SUCCESS:{
          return{
              ...state,
              listFilm: action.payload
          }
      }
      case UPDATE_SHOWALERT:{
        return{
          ...state,
          showAlert: action.payload
        }
      }
      default: {
        return state;
      }
    }
  };
  // Exports
  export default userReducer;