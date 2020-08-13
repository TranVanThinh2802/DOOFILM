import { takeLatest, call, put, delay } from "redux-saga/effects";
import { LOAD_LIST_USER_REQUEST } from "../../Constant/actionTypes";
import { loadUserApi } from "../../Apis";
import { loadListUserSuccessAction } from "../../Action";

function* requestAction(action) {
  let { payload } = action;
  try {
    const response = yield call(loadUserApi, payload); // goi api
    yield put(loadListUserSuccessAction(response.data.data));
  } catch (err) {
    console.log(err);
  }
}

function* loadListUserSagas() {
  yield takeLatest(LOAD_LIST_USER_REQUEST, requestAction);
}

export default loadListUserSagas;
