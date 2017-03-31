import React, { Component } from 'react';
import * as firebase from 'firebase';


class Chat extends Component {
  constructor(props, context) {
    super(props, context)
    this.updateMessage = this.updateMessage.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
    // props instead
    this.state = {
      message: '',
      messages: []
    }
  }


//function is called whenever component shows up
//lifecycle function, no need to call

  componentDidMount(){
    //go into json object in database, find messages key
    // if any changes, run callback function
    firebase.database().ref('messages/').on('value', (snapshot)=> {
      //snapshot is current value of that key in database
      //called everytime there is a change in the backend
      const currentMessages = snapshot.val()

      if (currentMessages != null){
        this.setState({
          messages: currentMessages
        })
      }
    })
  }



  updateMessage(event){
    this.setState({
      message: event.target.value
    })
  }


  submitMessage(event){
    console.log('submitMessage: '+this.state.message)
    const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message
    }


    // whenever state change in component, react rerenders component
    // new data will be rendered
    // setState = reload

    // var list = Object.assign([], this.state.messages)
    // list.push(nextMessage)
    // this.setState({
    //   messages: list
    // })

    //when we submit next message, reconnect to firebase
    // find message key and add another key inside
    //set our nextMessage as value for sub index
  firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)

  }


  render() {
    const currentMessage = this.state.messages.map((message, i) => {
      return(
        <li key={message.id}>{message.text}</li>
      )
    })


    return (
      <div>
        <ol>
          {currentMessage}
        </ol>
        <input onChange={this.updateMessage} type="text" placeholder="Message" />
        <br />
        <button onClick={this.submitMessage}>Submit Message</button>
      </div>
    )
  }
}

export default Chat;
