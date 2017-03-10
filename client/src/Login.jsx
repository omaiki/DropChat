import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  margin: 12,
};

export default class Login extends Component{
  render(){
    return(
      <div>
        <RaisedButton label="SignUp" style={style} />

        <RaisedButton label="Login" primary={true} style={style} />
      </div>
    )
  }
}
