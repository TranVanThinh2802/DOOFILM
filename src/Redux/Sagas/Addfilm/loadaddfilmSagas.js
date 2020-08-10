import { takeLatest, call, put, delay } from "redux-saga/effects";
import { LOAD_ADD_FILM_REQUEST } from "../../Constant/actionTypes";
import { loadAddFilmApi } from "../../Apis/Film/loadFilmApi";
import {
  loadAddFilmSuccessAction,
  showalertaction,
} from "../../Action/addfilmActions";
import { updateAlertAction } from "../../Action/generic/index";

function* requestAction(action) {
  yield put(showalertaction(true));
  let { payload, responseUI } = action;
  try {
    const response = yield call(loadAddFilmApi, payload); // goi api
    // console.log(response.data, "Response")
    // yield put(loadAddFilmSuccessAction(response.data))
    // console.log("addfilm")
    const { code, message_vn: message, data } = response.data;
    if (code === 200) {
      yield put(loadAddFilmSuccessAction(data));
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
  yield takeLatest(LOAD_ADD_FILM_REQUEST, requestAction);
}

export default loadAddFilmSagas;
