import {LOAD_LIST_FILM_DELETE_REQUEST, LOAD_LIST_FILM_DELETE_SUCCESS} from '../Constant/actionTypes'

//film request data
export const loadListFilmDeleteAction = (payload)=>{
    return{
        type: LOAD_LIST_FILM_DELETE_REQUEST,
        payload: payload// paramster
    }
}
//load success
export const loadListFilmDeleteSuccessAction = (payload)=>{
    return{
        type: LOAD_LIST_FILM_DELETE_SUCCESS,
        payload: payload// paramster
    }
}