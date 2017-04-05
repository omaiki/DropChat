import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import Restaurants from './Restaurants';
import './Application.css';
import ChatList from './components/ChatList';
import NewChat from './NewChat';

import map from 'lodash/map';

class Application extends Component {
  constructor(props) {
    super(props);

    //not logged in by default
    this.state = {
      currentUser: null
    };

    this.restaurantRef = database.ref('/restaurants');
    this.chatRef = database.ref('/chats');
  }

  //when component mount
  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      console.log('AUTH_CHANGE', currentUser);
      this.setState({ currentUser});

      this.restaurantRef.on('value', (snapshot) => {
        this.setState({ restaurants: snapshot.val() });
      });

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
          <NewRestaurant />
          <NewChat />
          { map(restaurants, (restaurant, key) => <p key={key}>{ restaurant.name }</p> ) }
          { map(chats, (chat, key) => <p key={key}> { chat.name} </p>) }
          <CurrentUser user={currentUser} />}
          </div>
        }
        </div>
        < ChatList />
      </div>
    );
  }
}

export default Application;
