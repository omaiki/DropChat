import React, { Component } from 'react';
import Chat from './Chat.js'
import RaisedButton from 'material-ui/RaisedButton';

class UserInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.updateMessage = this.updateMessage.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
    this.state = {
      message: ''
    }

  }

  updateMessage(event){
    console.log('updateMessage: '+event.target.value)
    this.setState({
      message: event.target.value
    })
  }

  submitMessage(event){
    console.log('submitMessage: '+this.state.message)
  }



// chat component in render
// <Chat />
// <ChatList />

// take user input for chat names

  render() {
    return (
      <div>
        <input onChange={this.updateMessage} type="text" placeholder="Type a Message..." />
        <button onClick={this.submitMessage}>Submit Message</button>

      </div>
    );
  }
}

export default UserInput;
