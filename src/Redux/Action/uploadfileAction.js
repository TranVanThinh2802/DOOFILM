import {UPLOAD_FILE_LOADING, UPLOAD_FILE_SUCCESS, UPDATE_IS_LOADING} from '../Constant/actionTypes';

export const loadfileAction = (payload)=>{
    return{
        type: UPDATE_IS_LOADING,
        payload: payload// paramster
    }
}
//load success
export const loadfileSuccessAction = (payload)=>{
    return{
        type: UPLOAD_FILE_SUCCESS,
        payload: payload// paramster
    }
}