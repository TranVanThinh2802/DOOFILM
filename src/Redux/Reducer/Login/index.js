import {LOAD_LOGIN_SUCCESS, UPDATE_SHOWALERT} from '../../Constant/actionTypes';

// Initial State
const initialState = {
    login: [],
    showAlert: false,
};

// Redux: Counter Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LOGIN_SUCCESS:{
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