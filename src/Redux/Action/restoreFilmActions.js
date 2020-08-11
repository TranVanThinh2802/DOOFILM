import {LOAD_RESTORE_REQUEST, LOAD_RESTORE_SUCCESS, UPDATE_SHOWALERT} from '../Constant/actionTypes'

export const loadRestoreFilmAction = (payload)=>{
    return{
        type: LOAD_RESTORE_REQUEST,
        payload: payload// paramster
    }
}
//load success
export const loadRestoreFilmSuccessAction = (payload)=>{
    return{
        type: LOAD_RESTORE_SUCCESS,
        payload: payload// paramster
    }
}

export const showalertaction = (payload)=>{
    return{
        type: UPDATE_SHOWALERT,
        payload: payload// paramster
    }
}