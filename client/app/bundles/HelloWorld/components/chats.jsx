import React from 'react';
import ChatForm from './chat_form';
import { ChatsList } from './chats_list';
import update from 'immutability-helper';

export default class Chats extends React.Component {
  constructor (props, railsContext) {
    super(props)
    this.state = {
      chats: this.props.chats,
      title: 'Starbucks chat',
      location: 'Hercules, CA'
    }
  }

  handleUserInput (obj) {
    this.setState(obj);
  }

  handleFormSubmit () {
    const chat = {title: this.state.title, location: this.state.location};
    $.post('chats',
            {chat: chat})
          .done((data) => {
            this.addNewChat(data);
          });
  }

  addNewChat (chat) {
    const chats = update(this.state.chats, { $push: [chat]});
    this.setState({
      chats: chats.sort(function(a,b){
        return new Date(a.location) - new Date(b.location);
      })
    });
  }

  render () {
    return (
      <div>
        <h1> hello from chats</h1>
        <ChatForm input_title={this.state.title}
          input_location={this.state.location}
          onUserInput={(obj) => this.handleUserInput(obj)}
          onFormSubmit={() => this.handleFormSubmit()} />

      </div>
    )
  }


}
