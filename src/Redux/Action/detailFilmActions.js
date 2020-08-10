import {DETAIL_FILM_REQUEST, DETAIL_FILM_SUCCESS} from '../Constant/actionTypes'; //dung de truy cap toi 1 hanh dong



//film request data
export const detailFilmAction = (payload, responseUI)=>{
    return{
        type: DETAIL_FILM_REQUEST,
        payload,
        responseUI,
    }
}
//load success
export const detailFilmSuccessAction = (payload)=>{
    return{
        type: DETAIL_FILM_SUCCESS,
        payload: payload,
    }
}