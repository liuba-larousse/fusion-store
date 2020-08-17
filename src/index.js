/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
// import * as firebase from 'firebase';

// var firebaseConfig = {
//   apiKey: 'AIzaSyAKBh6sLLacJOd2hKvyQJmNWwzHKl7qJ3k',
//   authDomain: 'fusion-store.firebaseapp.com',
//   databaseURL: 'https://fusion-store.firebaseio.com',
//   projectId: 'fusion-store',
//   storageBucket: 'fusion-store.appspot.com',
//   messagingSenderId: '73099131151',
//   appId: '1:73099131151:web:7b9b67a4ef2f90318a267a',
//   measurementId: 'G-XNLFVDHZ5J',
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
