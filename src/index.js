import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Chat from './components/Chat';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
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
  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="signup" component={Signup} />
        <Route path="login" component={Login} />
      </Route>
    </Router>,
  document.getElementById('root')
);
