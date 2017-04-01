import React, { Component } from 'react';
import './App.css';
import Chat from './components/Chat.js'
import ChatList from './components/ChatList.js'
import Header from './components/Header.js'



class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />
        <ChatList />
      </div>
    );
  }
}


export default App;
