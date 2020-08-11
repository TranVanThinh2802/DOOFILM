import { takeLatest, call, put, delay } from "redux-saga/effects";
import { LOAD_RESTORE_REQUEST } from "../../Constant/actionTypes";
import { loadRestoreFilmApi } from "../../Apis/Film/loadFilmApi";
import {loadRestoreFilmSuccessAction} from '../../Action/restoreFilmActions'
import { updateAlertAction } from "../../Action/generic/index";

function* requestAction(action) {
  let { payload,responseUI } = action;
  try {
    const response = yield call(loadRestoreFilmApi, payload); // goi api
    // console.log(response.data, "Response");
    // yield put(loadRestoreFilmSuccessAction(response.data));
    const { code, message_vn: message, data } = response.data;
    if (code === 200) {
      yield put(loadRestoreFilmSuccessAction(data));
      yield responseUI ? responseUI() : null;
      
    }
      yield put(
        updateAlertAction({
          code,
          message,
        })
      );
  } catch (err) {
    console.log(err);
  }
}

function* loadListSagas() {
  yield takeLatest(LOAD_RESTORE_REQUEST, requestAction);
}

export default loadListSagas;
