import { firebase } from 'firebase';
import { put, takeLatest, all, select } from 'redux-saga/effects'; 

export function* registerFB () {
    const state = yield select();
    firebase.auth().createUserWithEmailAndPassword(state.auth.email, state.auth.password)
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}

export function* authFB () {
    const state = yield select();
    firebase.auth().signUpUserWithEmailAndPassword(state.auth.email, state.auth.password)
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}