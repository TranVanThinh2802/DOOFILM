import * as Types from '../../Constant/actionTypes';




export const updateIsLoadingAction = (payload) =>{
    return{
        type: Types.UPDATE_IS_LOADING,
        payload: payload
    }
};

export const updateAlertAction = (payload)=>{
    return{
        type: Types.UPDATE_ALERT,
        payload: payload
    }
};

export const showalertaction = (payload)=>{
    return{
        type: Types.UPDATE_SHOWALERT,
        payload: payload// paramster
    }
}