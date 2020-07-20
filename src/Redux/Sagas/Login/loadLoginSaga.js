import {takeLatest, call, put, delay} from 'redux-saga/effects';
import {
  LOAD_LOGIN_REQUEST
} from '../../Constant/actionTypes';
import {loadLoginApi} from '../../Apis/Film/loadFilmApi'
import {
  loadLoginSuccessAction,
  showalertaction
} from '../../Action/loginAction';


function* requestAction(action) {
  yield put(showalertaction(true))
  // delay(3000)
  // yield put(showalertaction(false))
  let {payload} = action;
  try {
    const response = yield call(loadLoginApi, payload);// goi api
    console.log(response.data, "Response")
    yield put(loadLoginSuccessAction(response.data))

    
  } catch (err) {
        console.log("error")
  }
}

function* loadListSagas() {
  yield takeLatest(LOAD_LOGIN_REQUEST, requestAction);
}

export default loadListSagas;
