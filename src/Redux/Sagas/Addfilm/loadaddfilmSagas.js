import {takeLatest, call, put, delay} from 'redux-saga/effects';
import {
  LOAD_ADD_FILM_REQUEST
} from '../../Constant/actionTypes';
import {loadAddFilmApi} from '../../Apis/Film/loadFilmApi'
import {
  loadAddFilmSuccessAction} from '../../Action/addfilmActions';

function* requestAction(action) {
  let {payload} = action;
  try {
    const response = yield call(loadAddFilmApi, payload);// goi api
    console.log(response.data, "Response")
    yield put(loadAddFilmSuccessAction(response.data))
    console.log("addfilm")
  } catch (err) {
        console.log("error")
  }
}

function* loadAddFilmSagas() {
  yield takeLatest(LOAD_ADD_FILM_REQUEST, requestAction);
}

export default loadAddFilmSagas;
