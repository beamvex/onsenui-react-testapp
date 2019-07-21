import { put } from 'redux-saga/effects'; 
import { trucksReceived } from "../../actions/index";

var fetch = require( 'node-fetch' );

export function* fetchTrucks() {
    const json = yield fetch('https://firestore.googleapis.com/v1/projects/test1-2b206/databases/(default)/documents/trucks/')
            .then(response => {                
                return response.json()
            })
            .then(json => {
                console.log(json);
                return json;
            }); 
            

    yield put(trucksReceived(json.documents));
}