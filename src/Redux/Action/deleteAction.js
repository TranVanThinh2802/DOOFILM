import {LOAD_DELETE_FIM_REQUEST, LOAD_DELETE_FILM_SUCCESS} from '../Constant/actionTypes'

//film request data
export const loadDeleteFilmAction = (payload)=>{
    return{
        type: LOAD_DELETE_FIM_REQUEST,
        payload: payload// paramster
    }
}

//load success
export const loadDeleteFilmSuccessAction = (payload)=>{
    return{
        type: LOAD_DELETE_FILM_SUCCESS,
        payload: payload// paramster
    }
}