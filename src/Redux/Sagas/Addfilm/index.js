import {all} from 'redux-saga/effects'
import {loadaddfilmSagas} from './loadaddfilmSagas'

export const Addfilm = function* root(){
    yield all([loadaddfilmSagas()])
}