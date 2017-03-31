import React, {Component} from 'react';
import Header from '../containers/Header';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}


export default App;
