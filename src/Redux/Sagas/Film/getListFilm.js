import { takeLatest, call, put } from "redux-saga/effects";
import {
  GET_LIST_FILM_REQUEST,
  GET_LIST_FILM_SUCCESS,
  UPDATE_LOADING_LIST_FILM,
  UPDATE_REFRESHING_LIST_FILM,
} from "../../Constant/actionTypes";
import {loadFilmApi} from '../../Apis/index'

function* requestAction(action) {
  if (action.isLoadAll) {
    yield put({
      type: UPDATE_LOADING_LIST_FILM,
      payload: true,
    });
  } else if (action.isSearch) {
    // yield put(updateIsLoadingAction(action.routeName));
    yield put({
      type: UPDATE_REFRESHING_LIST_FILM,
      payload: false,
    });
  } else {
    yield put({
      type: UPDATE_REFRESHING_LIST_FILM,
      payload: true,
    });
  }
  try {
    let response = yield call(loadFilmApi, action.payload);
    const { code, message } = response.data;
    if (code === 200) {
      return yield put({
        type: GET_LIST_FILM_SUCCESS,
        payload: response.data.data,
        isLoadAll: action.isLoadAll,
      });
    }
    // return yield put(updateAlertAction({ message, code }, true));
  } catch (err) {
    // return yield put(showErrorAlertAction());
  }
}

function* getListFilm() {
    yield takeLatest(GET_LIST_FILM_REQUEST, requestAction);
  }
  
  export default getListFilm;
