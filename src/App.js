import React, { Component } from 'react';
import './App.css';

import Chat from './components/Chat.js'
import Signup from './components/Signup.js'
import Login from './components/Login.js'


class App extends Component {




  render() {
    return (
      <div className="App">
        <Signup />
        <Login />
        <Chat />
      </div>
    );
  }
}

export default App;
