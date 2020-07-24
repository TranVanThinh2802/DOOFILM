import {UPDATE_IS_LOADING, UPDATE_ALERT} from '../../Constant/actionTypes';




export const updateIsLoadingAction = (payload) =>{
    return{
        type: UPDATE_IS_LOADING,
        payload: payload
    }
};

export const updateAlertAction = (payload)=>{
    return{
        type:UPDATE_ALERT,
        payload: payload
    }
};