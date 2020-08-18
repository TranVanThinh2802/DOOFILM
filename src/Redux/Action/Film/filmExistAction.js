import * as Types from '../../Constant/actionTypes';

export const createFilmAction = (payload)=>{
    return{
        type: Types.CREATE_FILM_REQUEST,
        payload: payload// paramster
    }
}

export const createFilmSuccessAction = (payload)=>{
    return{
        type: Types.CREATE_FILM_SUCCESS,
        payload: payload// paramster
    }
}

//film request data
export const loadListFilmAction = (payload)=>{
    return{
        type: Types.LOAD_LIST_FILM_ADMIN_REQUEST,
        payload: payload// paramster
    }
}
//load success
export const loadListFilmSuccessAction = (payload)=>{
    return{
        type: Types.LOAD_LIST_FILM_SUCCESS,
        payload: payload// paramster
    }
}

export const getFilmAction = (payload, isLoadAll)=>{
    return{
        type: Types.LOAD_LIST_FILM_REQUEST,
        payload: payload,
        isLoadAll,
    }
}

export const updateFilmAction = (payload) =>{
    return{
        type: Types.GET_LIST_FILM_SUCCESS,
        payload: payload,
    }
}

export const detailFilmAction = (payload, responseUI)=>{
    return{
        type: Types.DETAIL_FILM_REQUEST,
        payload,
        responseUI,
    }
}

export const detailFilmSuccessAction = (payload)=>{
    return{
        type: Types.DETAIL_FILM_SUCCESS,
        payload: payload,
    }
}
// tìm kiếm phim
export const loadFindFilmAction = (payload)=>{
    return{
        type: Types.LOAD_FIND_FILM_REQUEST,
        payload: payload// paramster
    }
}

export const updateListFind = (payload) =>{
    return{
        type: Types.UPDATE_LIST_FIND,
        payload,
    }
}


export const findFilmSuccessAction = (payload)=>{
    return{
        type: Types.LOAD_FIND_FILM_SUCCESS,
        payload: payload// paramster
    }
}

///admin
export const addItemFilmListExitAction = (payload) =>{
    return{
        type:Types.ADD_ITEM_FILM_LIST_EXITS,
        payload:payload
    }
}

export const addItemListDelete = (payload) =>{
    return{
        type:Types.ADD_ITEM_LIST_DELETD,
        payoad: payload
    }
}

export const removeItemListFilmExitAction = payload => {
    return{
        type: Types.REMOVE_ITEM_FILM_EXITS,
        payload,
    }
}