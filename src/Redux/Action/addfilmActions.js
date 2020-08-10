import {LOAD_ADD_FILM_REQUEST, LOAD_ADD_FIM_SUCCESS, UPDATE_SHOWALERT} from '../Constant/actionTypes'



//film request data
export const loadAddFilmAction = (payload)=>{
    return{
        type: LOAD_ADD_FILM_REQUEST,
        payload: payload// paramster
    }
}
//load success
export const loadAddFilmSuccessAction = (payload)=>{
    return{
        type: LOAD_ADD_FIM_SUCCESS,
        payload: payload// paramster
    }
}

export const showalertaction = (payload)=>{
    return{
        type: UPDATE_SHOWALERT,
        payload: payload// paramster
    }
}