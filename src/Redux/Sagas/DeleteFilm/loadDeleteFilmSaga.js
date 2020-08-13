import { takeLatest, call, put, delay } from "redux-saga/effects";
import { GET_LIST_FILM_DELETED_REQUEST } from "../../Constant/actionTypes";
import { loadDeleteFilmApi } from "../../Apis";
import {
  showalertaction,
  removeItemListFilmExitAction,
} from "../../Action";

function* requestAction(action) {
  let { payload } = action;
  try {
    const response = yield call(loadDeleteFilmApi, payload); // goi api
    console.log(response)
    const { code, message_vn: message, data } = response.data;
    if (code === 200) {
      //xoa 1 phan tu
      yield put(removeItemListFilmExitAction(action.payload));
    }
  
    yield put(showalertaction(true));
  } catch (err) {
    console.log(err);
  }
}

function* loadListSagas() {
  yield takeLatest(GET_LIST_FILM_DELETED_REQUEST, requestAction);
}

export default loadListSagas;
