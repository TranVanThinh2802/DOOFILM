import {LOAD_RESTORE_SUCCESS, UPDATE_SHOWALERT, REMOVE_LISTFILM_DELETED} from '../../Constant/actionTypes'
import { id } from 'date-fns/locale';


const initialState = {
    data:[],
    showAlert: false,
    listFilm: []
  };

  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      
      
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