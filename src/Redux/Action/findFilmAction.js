import {LOAD_FIND_FILM_REQUEST, LOAD_FIND_FILM_SUCCESS} from '../Constant/actionTypes'

//film request data
export const loadFindFilmAction = (payload)=>{
    return{
        type: LOAD_FIND_FILM_REQUEST,
        payload: payload// paramster
    }
}

//load success
export const loadListFilmSuccessAction = (payload)=>{
    return{
        type: LOAD_FIND_FILM_SUCCESS,
        payload: payload// paramster
    }
}