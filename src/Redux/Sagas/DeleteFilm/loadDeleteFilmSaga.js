import { takeLatest, call, put, delay } from "redux-saga/effects";
import { LOAD_DELETE_FIM_REQUEST } from "../../Constant/actionTypes";
import { loadDeleteFilmApi } from "../../Apis/Film/loadFilmApi";
import { loadDeleteFilmSuccessAction,showalertaction } from "../../Action/deleteAction";
import { updateAlertAction } from "../../Action/generic/index";


function* requestAction(action) {
  yield put(showalertaction(true));
  let { payload,responseUI } = action;
  try {
    const response = yield call(loadDeleteFilmApi, payload); // goi api
    // console.log(response.data, "Response");
    // yield put(loadDeleteFilmSuccessAction(response.data));
    const { code, message_vn: message, data } = response.data;
    if (code === 200) {
      yield put(loadDeleteFilmSuccessAction(data));
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
  yield takeLatest(LOAD_DELETE_FIM_REQUEST, requestAction);
}

export default loadListSagas;
