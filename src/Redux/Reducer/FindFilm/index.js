import {} from '../../Constant/actionTypes'

const initialState = {
   data:[]
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_LIST_FILM_SUCCESS:{
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