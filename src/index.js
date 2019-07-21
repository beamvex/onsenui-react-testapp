import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./store/index";
import { addArticle, getNews, getLocation } from "./actions/index";

// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import * as firebase from 'firebase';
var app = firebase.initializeApp({ 
    apiKey: 'AIzaSyBpBwGqd8U8GA-HschlOvAUWJVjUFr1bJc',
    projectId: 'test1-2b206',
 });

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

store.dispatch(getLocation());