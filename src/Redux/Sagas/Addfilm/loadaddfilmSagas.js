import { takeLatest, call, put, delay } from "redux-saga/effects";
import { CREATE_FILM_REQUEST } from "../../Constant/actionTypes";
import { loadAddFilmApi } from "../../Apis";
import {
  createFilmSuccessAction,
  showalertaction,
  updateAlertAction,
} from "../../Action";

function* requestAction(action) {
  yield put(showalertaction(true));
  let { payload, responseUI } = action;
  try {
    const response = yield call(loadAddFilmApi, payload); // goi api
    // console.log(response.data, "Response")
    // yield put(createFilmSuccessAction(response.data))
    // console.log("addfilm")
    const { code, message_vn: message, data } = response.data;
    if (code === 200) {
      yield put(createFilmSuccessAction(data));
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

function* loadAddFilmSagas() {
  yield takeLatest(CREATE_FILM_REQUEST, requestAction);
}

export default loadAddFilmSagas;
