import {all} from 'redux-saga/effects'
import loadaddfilmSagas from './loadaddfilmSagas'

export const AddfilmSagas = function* root(){
    yield all([loadaddfilmSagas()])
}