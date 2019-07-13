import { put, takeLatest, all } from 'redux-saga/effects'; 
import { GET_NEWS, GET_LOCATION } from "../constants/action-types";
import { newsReceived, locationReceived, getNews } from "../actions/index";
var fetch = require( 'node-fetch' );

function* fetchLocation() {
    yield put(getNews());
}

function* fetchNews() {
    const json = yield fetch('https://firestore.googleapis.com/v1/projects/test1-2b206/databases/(default)/documents/trucks/')
            .then(response => {                
                return response.json()
            })
            .then(json => {
                console.log(json);
                return json;
            }); 
            

    yield put(newsReceived(json.documents));
} 

function* actionWatcher() {
    yield takeLatest(GET_NEWS, fetchNews);
    yield takeLatest(GET_LOCATION, fetchLocation);
} 

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}