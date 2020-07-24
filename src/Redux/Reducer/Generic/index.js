import * as Types from '../../Constant/actionTypes';

/*
status code:
    0: dismiss alert
    routename => species for UI
    else => show alert
*/

const getTypeAlert = code => {
  //can expand
  if (code === 200) return 'success';
  else if (code === 199) return 'warning';
  return 'danger';
};
const initialState = {
  isLoading: false,
  alert: {
    code: 0,
    message: '',
    type: 'danger',
  },
};
const GenericReducer = (state=initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case Types.UPDATE_ALERT: {
      return {
        ...state,
        alert: {
          type:
            action.payload.code != 0
              ? getTypeAlert(action.payload.code)
              : state.alert.type,
          message: action.payload.message,
          code: action.payload.code,
        },
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default GenericReducer;