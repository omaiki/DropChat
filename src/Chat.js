import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './Chat.css'

class Chat extends Component {
  render () {
    const { name, user, votes, handleSelect, handleDeselect } = this.props;
    const userHasSelected = votes &&  Object.keys(votes).includes(user.uid)

    return (
      <article className="Chat">
      <h3> { name } </h3>
      <ul>
        {votes && map(votes, (vote, key) => <li key={key}>{ vote }</li>)}
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
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Chat;
