import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./store/index";
import { loadStore, getLocation } from "./actions/index";

// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import * as firebase from 'firebase';

ReactDOM.render(  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

store.subscribe(() => {
    console.log(store.getState());
});

var localStore = {};
try {
    localStore = JSON.parse(localStorage.getItem('store'));
} catch (e) {
    // ignore bad data
}

store.dispatch(loadStore(localStore));

store.dispatch(getLocation());