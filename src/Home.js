import React, { Component } from 'react';
import './App.css';
import App from './App.js'
import Chat from './components/Chat.js'
import ChatList from './components/ChatList.js'




class Home extends Component {


  render() {
    return (
      <div className="App">
        <App />
        <ChatList />
      </div>
    );
  }
}


export default Home;
