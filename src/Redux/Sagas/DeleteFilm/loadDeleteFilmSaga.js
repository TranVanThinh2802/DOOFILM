import { takeLatest, call, put, delay } from "redux-saga/effects";
import { LOAD_DELETE_FIM_REQUEST } from "../../Constant/actionTypes";
import { loadDeleteFilmApi } from "../../Apis/Film/loadFilmApi";
import { loadDeleteFilmSuccessAction } from "../../Action/deleteAction";

function* requestAction(action) {
  let { payload } = action;
  try {
    const response = yield call(loadDeleteFilmApi, payload); // goi api
    console.log(response.data, "Response");
    yield put(loadDeleteFilmSuccessAction(response.data));
  } catch (err) {
    console.log("errordelete");
  }
}

function* loadListSagas() {
  yield takeLatest(LOAD_DELETE_FIM_REQUEST, requestAction);
}

export default loadListSagas;
