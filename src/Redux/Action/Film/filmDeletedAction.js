import * as Types from '../../Constant/actionTypes';



export const getListFilmDeletedAction = (payload)=>{
    return{
        type: Types.GET_LIST_FILM_DELETED_REQUEST,
        payload: payload// paramster
    }
}

export const updateRestoreFilmAction = (payload)=>{
    return{
        type: Types.REMOVE_LISTFILM_DEDETED_REQUEST,
        payload: payload// paramster
    }
}
//load success
export const updateRestoreFilmSuccessAction = (payload)=>{
    return{
        type: Types.REMOVE_LISTFILM_DEDETED_SUCCESS,
        payload: payload// paramster
    }
}

export const daterestoretaction = (payload)=>{
    return{
        type: Types.REMOVE_LISTFILM_DELETED,
        payload: payload// paramster
    }
}

export const loadListFilmDeleteAction = (payload)=>{
    return{
        type: Types.LOAD_LIST_FILM_DELETE_REQUEST,
        payload: payload// paramster
    }
}
//load success
export const loadListFilmDeleteSuccessAction = (payload)=>{
    return{
        type: Types.LOAD_LIST_FILM_DELETE_SUCCESS,
        payload: payload// paramster
    }
}

export const loadRestoreFilmAction = (payload)=>{
    return{
        type: Types.LOAD_RESTORE_REQUEST,
        payload: payload// paramster
    }
}

export const loadRestoreFilmSuccessAction = (payload)=>{
    return{
        type: Types.LOAD_RESTORE_SUCCESS,
        payload: payload// paramster
    }
}

export const loadDeleteFilmAction = (payload)=>{
    return{
        type: Types.LOAD_DELETE_FIM_REQUEST,
        payload: payload// paramster
    }
}

export const loadDeleteFilmSuccessAction = (payload)=>{
    return{
        type: Types.LOAD_DELETE_FILM_SUCCESS,
        payload: payload// paramster
    }
}

//handle remove /update storage

export const updateRemoveListFilmDeleteAction = (payload) => {
    return {
      type: Types.UPDATE_REMOVE_DELETED_LISTFIM_REQUEST,
      payload: payload, // paramster
    };
  };
  //load success
  export const updateRemoveListFilmDeleteSuccessAction = (payload) => {
    return {
      type: Types.UPDATE_REMOVE_DELETED_LISTFIM_SUCCESS,
      payload: payload, // paramster
    };
  };
  
  export const updateRemoveDeleteListFilm = (payload) => {
    return {
      type: Types.REMOVE_ITEM_LIST_DELETED,
      payload: payload, // paramster
    };
  };
  