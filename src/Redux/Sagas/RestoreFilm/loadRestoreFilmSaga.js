import { takeLatest, call, put, delay } from "redux-saga/effects";
import { LOAD_RESTORE_REQUEST } from "../../Constant/actionTypes";
import { loadRestoreFilmApi } from "../../Apis";
import {
  loadRestoreFilmSuccessAction,
  updateAlertAction,
  daterestoretaction,
} from "../../Action";

function* requestAction(action) {
  let { payload, responseUI } = action;
  try {
    const response = yield call(loadRestoreFilmApi, payload); // goi api
    // console.log(response.data, "Response");
    // yield put(loadRestoreFilmSuccessAction(response.data));
    const { code, message_vn: message, data } = response.data;
    if (code === 200) {
      yield put(loadRestoreFilmSuccessAction(action.payload));
      // yield put(daterestoretaction(action.payload.id));
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
