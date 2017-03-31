import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './containers/Home';
import Signup from './containers/Signup';
import Login from './containers/Login';
import Chat from './components/Chat';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import * as firebase from 'firebase';


  const store = configureStore();

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBOtUift82Bq8CFIklt-kbRx5QFjcb8P2g",
    authDomain: "refire-app.firebaseapp.com",
    databaseURL: "https://refire-app.firebaseio.com",
    projectId: "refire-app",
    storageBucket: "refire-app.appspot.com",
    messagingSenderId: "201898147893"
  };

  firebase.initializeApp(config);



ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')
);
