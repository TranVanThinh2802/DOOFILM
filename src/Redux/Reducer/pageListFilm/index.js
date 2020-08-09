import {GET_LIST_FILM_SUCCESS, UPDATE_LOADING_LIST_FILM, UPDATE_REFRESHING_LIST_FILM} from '../../Constant/actionTypes'

const initialState = {
    page: 1,
    data: [],
    loading: true,
    isRefreshing: false,
    isFull: false,
    curren_page: 1,
    last_page: 1
};

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case GET_LIST_FILM_SUCCESS: {
        return {
          ...state,
            page: action.payload.current_page,
            data: action.payload.data,
            loading: false,
            isFull: action.payload.current_page == action.payload.last_page,
            isRefreshing: false,
            last_page: action.payload.last_page,
            
        };
      }
      case UPDATE_LOADING_LIST_FILM: {
        return {
          ...state,
            loading: action.payload,
          }
      }
      case UPDATE_REFRESHING_LIST_FILM: {
        return {
          ...state,
            isRefreshing: action.payload,
          
        };
      }
      
      default: {
        return state;
      }
    }
  };
  // Exports
  export default filmReducer;