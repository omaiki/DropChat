import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import Chat from '../components/Chat.js'
import Signup from './Signup.js'
import Login from './Login.js'


class Home extends Component {


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

function mapStateToProps(state){
  return {
  };
}

function mapDispatchToProps(dispatch){
  return{
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
