import { put, select } from 'redux-saga/effects';
import { trucksReceived, updateListener, addTruck } from "../../actions/index";
import store from '../../store/index'

// This import loads the firebase namespace along with all its type information.
import * as firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';

export function* fetchTrucks() {

    const state = yield select();

    if (state.truckReducer.listner !== undefined) {
        state.truckReducer.listner();
    }

    var listener = undefined;

    yield listener = firebase.firestore().collection('trucks').onSnapshot(updateTrucks);

    yield put(updateListener(listener));

}

function updateTrucks(result) {
    
    var trucks = [];

    store.dispatch(trucksReceived(trucks));

    result.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        var truck = {
            id: doc.id,
            ...doc.data()
        }
        store.dispatch(addTruck(truck));
    })
}
