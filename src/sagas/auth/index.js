// This import loads the firebase namespace along with all its type information.
import * as firebase from 'firebase/app';
 
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import { put, takeLatest, all, select } from 'redux-saga/effects'; 

export function* registerFB () {
    const state = yield select();
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function() {
        firebase.auth().createUserWithEmailAndPassword(state.authReducer.email, state.authReducer.password)
      })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode, errorMessage);
    });
}

export function* authFB () {
    const state = yield select();
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(function() {
        firebase.auth().signInWithEmailAndPassword(state.authReducer.email, state.authReducer.password)
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode, errorMessage);
    });
}

var app = firebase.initializeApp({ 
    apiKey: 'AIzaSyBpBwGqd8U8GA-HschlOvAUWJVjUFr1bJc',
    projectId: 'test1-2b206',
});
firebase.auth().onAuthStateChanged((user) => {
    console.log('logged in', user.uid);
})