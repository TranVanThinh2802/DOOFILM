import {takeLatest, call, put, delay} from 'redux-saga/effects';
import {
  LOAD_ADD_FILM_REQUEST
} from '../../Constant/actionTypes';
import {loadFilmApi} from '../../Apis/Film/loadFilmApi'
import {
    addfilmActions
} from '../../Action/addfilmActions';

function* requestAction(action) {
  let {payload} = action;
  try {
    const response = yield call(loadFilmApi, payload);// goi api
    console.log(response.data, "Response")
    yield put(addfilmActions(response.data))
  } catch (err) {
        console.log("error")
  }
}

function* loadAddFilmSagas() {
  yield takeLatest(LOAD_ADD_FILM_REQUEST, requestAction);
}

export default loadAddFilmSagas;
