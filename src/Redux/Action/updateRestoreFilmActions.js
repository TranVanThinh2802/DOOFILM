import {REMOVE_LISTFILM_DEDETED_REQUEST, REMOVE_LISTFILM_DEDETED_SUCCESS, REMOVE_LISTFILM_DELETED} from '../Constant/actionTypes'

export const updateRestoreFilmAction = (payload)=>{
    return{
        type: REMOVE_LISTFILM_DEDETED_REQUEST,
        payload: payload// paramster
    }
}
//load success
export const updateRestoreFilmSuccessAction = (payload)=>{
    return{
        type: REMOVE_LISTFILM_DEDETED_SUCCESS,
        payload: payload// paramster
    }
}

export const daterestoretaction = (payload)=>{
    return{
        type: REMOVE_LISTFILM_DELETED,
        payload: payload// paramster
    }
}