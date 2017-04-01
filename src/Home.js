import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import * as Actions from './actions';
import App from './App.js'
import Chat from './components/Chat.js'
import ChatList from './components/ChatList.js'
import Signup from './containers/Signup.js'
import Login from './containers/Login.js'



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

function mapStateToProps(state){
  return {
  };
}

function mapDispatchToProps(dispatch){
  return{
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
