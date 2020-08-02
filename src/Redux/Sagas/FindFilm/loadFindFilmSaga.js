import {takeLatest, call, put, delay} from 'redux-saga/effects';
import {
  LOAD_FIND_FILM_REQUEST
} from '../../Constant/actionTypes';
import {loadFindFilmApi} from '../../Apis'
import {
  loadListFilmSuccessAction
} from '../../Action';

function* requestAction(action) {
  let {payload} = action;
  try {
    const response = yield call(loadFindFilmApi, payload);// goi api
    console.log(response.data.data.data, "Response")
    yield put(loadListFilmSuccessAction(response.data.data))

    
  } catch (err) {
        console.log("error")
  }
}

function* loadListSagas() {
  yield takeLatest(LOAD_FIND_FILM_REQUEST, requestAction);
}

export default loadListSagas;