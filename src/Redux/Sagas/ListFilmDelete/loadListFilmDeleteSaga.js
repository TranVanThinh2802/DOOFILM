import { takeLatest, call, put, delay } from "redux-saga/effects";
import { LOAD_LIST_FILM_DELETE_REQUEST } from "../../Constant/actionTypes";
import { loadListFilmDeleteApi } from "../../Apis/Film/loadFilmApi";
import { loadListFilmDeleteSuccessAction } from "../../Action/listFilmDeleteActions";

function* requestAction(action) {
  let { payload } = action;
  try {
    const response = yield call(loadListFilmDeleteApi, payload); // goi api
    console.log(response.data.data, "Response");
    yield put(loadListFilmDeleteSuccessAction(response.data.data));
  } catch (err) {
    console.log("error", err);
  }
}

function* loadListSagas() {
  yield takeLatest(LOAD_LIST_FILM_DELETE_REQUEST, requestAction);
}

export default loadListSagas;
