import {
  LOAD_DELETE_FILM_SUCCESS,
  ADD_ITEM_FILM_LIST_EXITS,
  
  REMOVE_ITEM_LIST_DELETED
} from "../../Constant/actionTypes";

const initialState = {
  listFilm: {
    data: [],
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DELETE_FILM_SUCCESS: {
      return {
        ...state,
        listFilm: {
          data: action.payload,
        },
      };
    }
    case REMOVE_ITEM_LIST_DELETED: {
      return {
        ...state,
        listFilm: {
          data: state.listFilm.data.filter(item => action.payload.id !== item.id),
        },
      };
    }
    
    // case UPDATE_SHOWALERT: {
    //   return {
    //     ...state,
    //     showAlert: action.payload,
    //   };
    // }
    // default: {
    //   return state;
    // }
  }
};
// Exports
export default userReducer;
