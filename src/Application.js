import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import './Application.css';
import ChatList from './components/ChatList';
import Chats from './Chats'
import NewChat from './NewChat';

import map from 'lodash/map';

class Application extends Component {
  constructor(props) {
    super(props);

    //not logged in by default
    this.state = {
      currentUser: null
    };

    this.chatRef = database.ref('/chats');
  }

  //when component mount
  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      console.log('AUTH_CHANGE', currentUser);
      this.setState({ currentUser});

      this.chatRef.on('value', (snapshot) => {
        this.setState({ chats: snapshot.val() });
      });

    });

  }

  render() {
    const { currentUser, restaurants, chats } = this.state;

    return (
      <div className="Application">
        <header className="Application--header">
          <h1>DropChat</h1>
        </header>
        <div>
        {!currentUser && <SignIn />}
        {
          currentUser &&
          <div>
          <NewChat />
          <Chats chats={chats} user={currentUser}/>
          <CurrentUser user={currentUser} />}
          </div>
        }
        </div>
      </div>
    );
  }
}

export default Application;
