import {LOAD_ADD_FIM_SUCCESS} from '../../Constant/actionTypes'

const initialState = {
      data: []
};

// Redux: Counter Reducer
const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_ADD_FIM_SUCCESS:{
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