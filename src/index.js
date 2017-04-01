import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import * as firebase from 'firebase';



  // Initialize Firebase
  var config = {


    apiKey: "AIzaSyBOtUift82Bq8CFIklt-kbRx5QFjcb8P2g",
    authDomain: "refire-app.firebaseapp.com",
    databaseURL: "https://refire-app.firebaseio.com",
    storageBucket: "refire-app.appspot.com",
    messagingSenderId: "201898147893"

  };

  firebase.initializeApp(config);



ReactDOM.render(

      <App />,

  document.getElementById('root')
);
