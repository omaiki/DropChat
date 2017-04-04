import React, { Component, PropTypes } from 'react';
import Chat from './components/Chat';
import map from './lodash/map';

class Chats extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <section className="Chats">
      </section>
    );
  }
}

Chats.propTypes = {
  user: PropTypes,
  chatsRef: PropTypes.object,
  chats: PropTypes.object
};

export default Chats;
