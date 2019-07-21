import { takeLatest, all } from 'redux-saga/effects'; 
import { GET_TRUCKS, GET_LOCATION, LOGIN, REGISTER } from "../constants/action-types";
import { authFB, registerFB } from './auth/index';
import { fetchLocation } from './location/index';
import { fetchTrucks } from './trucks/index';


function* actionWatcher() {
    yield takeLatest(GET_TRUCKS, fetchTrucks);
    yield takeLatest(GET_LOCATION, fetchLocation);
    yield takeLatest(REGISTER, registerFB);
    yield takeLatest(LOGIN, authFB);
} 

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}