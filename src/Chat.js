import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './Chat.css'

class Chat extends Component {
  render () {
    const { name, user, chatters, handleSelect, handleDeselect } = this.props;
    const userHasSelected = chatters &&  Object.keys(chatters).includes(user.uid)

    return (
      <article className="Chat">
      <h3> { name } </h3>
      <ul>
        {chatters && map(chatters, (chatter, key) => <li key={key}>{ chatter }</li>)}
      </ul>
      {
        userHasSelected
        ? <button className="destructive" onClick={handleDeselect}>
          Leave
        </button>
        :
        <button onClick={handleSelect}>
          Join
        </button>

      }
      </article>
    );
  }
}

Chat.propTypes = {
  name: PropTypes.string,
  chatters: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Chat;
