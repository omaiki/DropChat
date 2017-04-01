import React, { Component } from 'react';
import './App.css';

import Chat from './components/Chat.js'
import ChatList from './components/ChatList.js'
import UserInput from './components/UserInput.js'


class App extends Component {


// chat component in render
// <Chat />
// <ChatList />

// take user input for chat names
// allow that to be put into the firebase "ref" as a string?
  render() {
    return (
      <div className="App">
        <ChatList />


      </div>
    );
  }
}

export default App;
