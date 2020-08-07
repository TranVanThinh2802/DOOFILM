import { takeLatest, call, put, delay } from "redux-saga/effects";
import { LOAD_RESTORE_REQUEST } from "../../Constant/actionTypes";
import { loadRestoreFilmApi } from "../../Apis/Film/loadFilmApi";
import {loadRestoreFilmSuccessAction} from '../../Action/restoreFilmActions'


function* requestAction(action) {
  let { payload } = action;
  try {
    const response = yield call(loadRestoreFilmApi, payload); // goi api
    console.log(response.data, "Response");
    yield put(loadRestoreFilmSuccessAction(response.data));
  } catch (err) {
    console.log("errordelete");
  }
}

function* loadListSagas() {
  yield takeLatest(LOAD_RESTORE_REQUEST, requestAction);
}

export default loadListSagas;
