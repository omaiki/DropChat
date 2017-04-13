import React, { Component, PropTypes } from 'react';
import { database } from './firebase';

class NewChat extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      //
      message:[],
    };

    //reference to chats
    this.chatsRef = database.ref('/chats');
    //pushing new chat data to referece
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    //push name to database
    this.chatsRef.push({name: this.state.name});
    this.chatsRef.push({message: this.state.message});
  }

  render() {
    const { name } = this.state;

    return (
      <form
        className="NewChat"
      >
        <input
          type="text"
          value={ name }
          placeholder="Chat Name"
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <button
          onClick={this.handleSubmit}
          disabled={!name}
        >
          Submit
        </button>
      </form>
    );
  }
}

NewChat.propTypes = {
  chatsRef: PropTypes.object
};

export default NewChat;
