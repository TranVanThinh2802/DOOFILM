import { takeLatest, call, put, delay } from "redux-saga/effects";
import { LOAD_LIST_FILM_ADMIN_REQUEST } from "../../Constant/actionTypes";
import { loadFilmApi } from "../../Apis";
import { loadListFilmSuccessAction } from "../../Action";

function* requestAction(action) {
  let { payload } = action;
  try {
    const response = yield call(loadFilmApi, payload); // goi api
    console.log(response.data.data.data, "Response");
    yield put(loadListFilmSuccessAction(response.data.data));
  } catch (err) {
    console.log("error");
  }
}

function* loadListSagas() {
  yield takeLatest(LOAD_LIST_FILM_ADMIN_REQUEST, requestAction);
}

export default loadListSagas;
