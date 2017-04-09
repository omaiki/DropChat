import React, { Component } from 'react';
import * as firebase from 'firebase';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import PhotoIcon from 'material-ui/svg-icons/image/photo';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Divider from 'material-ui/Divider';
import Infinite from 'react-infinite';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {
  marginLeft: 20,
};

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


    // messages/1 == first message
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
        <li key={message.id}>{ message.text}</li>
      )
    })


    return (
        <div >
          <Paper zDepth={2}>
              <div className="container">
                  <div className="row">
                    <div className="col s12">
                    <Infinite containerHeight={200} elementHeight={40}>
                      <ol>
                        {currentMessage}

                      </ol>
                    </Infinite>
                  </div>
                    <div className="col s10" >
                      <input onChange={this.updateMessage} type="text" placeholder="Type a message..." /></div>
                    <div className="col s2" >
                      <button onClick={this.submitMessage}>Submit Message</button></div>
                  </div>
              </div>
            </Paper>
          </div>
    )
  }
}

export default Chat;
