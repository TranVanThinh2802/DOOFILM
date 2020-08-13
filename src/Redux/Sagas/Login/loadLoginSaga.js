import { takeLatest, call, put, delay } from "redux-saga/effects";
import { LOAD_LOGIN_REQUEST } from "../../Constant/actionTypes";
import { loadLoginApi } from "../../Apis";
import { loadLoginSuccessAction, showalertaction } from "../../Action";
import { updateAlertAction } from "../../Action/generic/index";

function* requestAction(action) {
  yield put(showalertaction(true));
  // delay(3000)
  // yield put(showalertaction(false))
  let { payload, responseUI } = action;
  try {
    const response = yield call(loadLoginApi, payload); // goi api
    const { code, message_vn: message, data } = response.data;
    if (code === 200) {
      yield put(loadLoginSuccessAction(data));
      yield responseUI();
    } else {
      yield put(
        updateAlertAction({
          code,
          message,
        })
      );
    }
  } catch (err) {
    console.log(err);
  }
}

function* loadListSagas() {
  yield takeLatest(LOAD_LOGIN_REQUEST, requestAction);
}

export default loadListSagas;
