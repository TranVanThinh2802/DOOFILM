import {takeLatest, call, put, delay} from 'redux-saga/effects';
import {
  LOAD_LOGIN_REQUEST
} from '../../Constant/actionTypes';
import {loadLoginApi} from '../../Apis/Film/loadFilmApi'
import {
  loadLoginSuccessAction,
  showalertaction
} from '../../Action/loginAction';
import {updateAlertAction} from '../../Action/generic/index';






function* requestAction(action) {
  

  yield put(showalertaction(true))
  // delay(3000)
  // yield put(showalertaction(false))
  let {payload, responseUI} = action;
  try {
    const response = yield call(loadLoginApi, payload);// goi api
    const {code, message_vn: message} = response.data;
    if(code === 200){
      yield responseUI()
    }else{
    yield put(updateAlertAction({
      code, message
    }));
  }
    yield put(loadLoginSuccessAction(response.data))
    

    
  } catch (err) {
        console.log("error")
  }
}

function* loadListSagas() {
  yield takeLatest(LOAD_LOGIN_REQUEST, requestAction);
}

export default loadListSagas;
