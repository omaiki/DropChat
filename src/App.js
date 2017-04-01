import React, { Component } from 'react';
import './App.css';

import Chat from './components/Chat.js'
import ChatList from './components/ChatList.js'


class App extends Component {




  render() {
    return (
      <div className="App">

        <ChatList />
      </div>
    );
  }
}

export default App;
