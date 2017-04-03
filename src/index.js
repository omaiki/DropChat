import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDIDm0mmUEKRfE0U8cxB0zXXADARaeUPGA",
    authDomain: "dropchat-db.firebaseapp.com",
    databaseURL: "https://dropchat-db.firebaseio.com",
    projectId: "dropchat-db",
    storageBucket: "dropchat-db.appspot.com",
    messagingSenderId: "188114561089"
  };

  firebase.initializeApp(config);



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
