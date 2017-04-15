import React, { Component, PropTypes } from 'react';
import Chat from './Chat';
import map from 'lodash/map';
import { database } from './firebase';
import './Chats.css'

class Chats extends Component {
  constructor(props) {
    super(props);
  }

  handleSelect(key) {
    const currentUser = this.props.user;
    database.ref('/chats')
            .child(key)
            .child('chatters')
            .child(currentUser.uid)
            .set(currentUser.displayName);
  }


  handleDeselect(key) {
    const currentUser = this.props.user;
    database.ref('/chats')
            .child(key)
            .child('chatters')
            .child(currentUser.uid)
            .remove();
  }

  render () {
    const {user, chats } = this.props;
    return (
      <section className="Chats">
      {
        map(chats, (chat, key) => {
            return <Chat
              key={key}
              {...chat}
              user={user}
              handleSelect={() => this.handleSelect(key)}
              handleDeselect={() => this.handleDeselect(key)}

              
            />;
        })
      }
      </section>
    );
  }
}

Chats.propTypes = {
  user: PropTypes.object,
  chatsRef: PropTypes.object,
  chats: PropTypes.object
};

export default Chats;
