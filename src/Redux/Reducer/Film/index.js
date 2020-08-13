import {
  LOAD_LIST_FILM_SUCCESS,
  ADD_ITEM_FILM_LIST_EXITS,
  REMOVE_ITEM_FILM_EXITS,
} from "../../Constant/actionTypes";

// Initial State
const initialState = {
  listFilm: {
    data: [],
  },
};

// Redux: Counter Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LIST_FILM_SUCCESS: {
      return {
        ...state,
        listFilm: {
          data: action.payload.data,
        },
      };
    }
    case REMOVE_ITEM_FILM_EXITS: {
      return {
        ...state,
        listFilm: {
          data: state.listFilm.data.filter((item) => item.id != action.payload.id), // payload: so nguyen
        },
      };
    }
    case ADD_ITEM_FILM_LIST_EXITS: {
      state.listFilm.data.unshift(action.payload);
      return {
        ...state,
        listFilm: {
          data: state.listFilm.data, // payload: item filem { id, tenfilem, poster}
        },
      };
    }
    default: {
      return state;
    }
  }
};
// Exports
export default userReducer;
