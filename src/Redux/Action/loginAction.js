import {LOAD_LOGIN_REQUEST, LOAD_LOGIN_SUCCESS, UPDATE_SHOWALERT} from '../Constant/actionTypes'; //dung de truy cap toi 1 hanh dong



//film request data
export const loadLoginAction = (payload)=>{
    return{
        type: LOAD_LOGIN_REQUEST,
        payload: payload// paramster
    }
}
//load success
export const loadLoginSuccessAction = (payload)=>{
    return{
        type: LOAD_LOGIN_SUCCESS,
        payload: payload// paramster
    }
}

export const showalertaction = (payload)=>{
    return{
        type: UPDATE_SHOWALERT,
        payload: payload// paramster
    }
}