import {takeLatest, call, put, delay} from 'redux-saga/effects';
import {
  DETAIL_FILM_REQUEST
} from '../../Constant/actionTypes';
import {detailFilmApi} from '../../Apis/Film/loadFilmApi'
import {
    detailFilmSuccessAction
} from '../../Action/detailFilmActions';

function* requestAction(action) {
  let {payload, responseUI} = action;
  try {
    const response = yield call(detailFilmApi, payload);// goi api
    console.log(response.data, "Response")
    const {code, message, data} = response.data
    if(code == 200){
      //thuc thi ham responeUI -> UI
      return  yield responseUI(data);
    }
    
  } catch (err) {
    console.log(err)
  }
}

function* loadListSagas() {
  yield takeLatest(DETAIL_FILM_REQUEST, requestAction);
}

export default loadListSagas;
