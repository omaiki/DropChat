import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import Restaurants from './Restaurants';
import './Application.css';
import ChatList from './components/ChatList';
import NewChat from './NewChat';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

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
      <MuiThemeProvider>
      <div className="Application">

        <header className="Application--header">
          <AppBar
            title="DropChat"
            showMenuIconButton="false"
          s>        {!currentUser && <SignIn />}
        {currentUser && <CurrentUser user={currentUser} />}</AppBar>
        </header>

        <div>

        {
          currentUser &&
          <div>
          <NewRestaurant />
          <NewChat />
          { map(restaurants, (restaurant, key) => <p key={key}>{ restaurant.name }</p> ) }
          { map(chats, (chat, key) => <p key={key}> { chat.name} </p>) }
          }
          </div>
          }
        </div>
        < ChatList />
      </div>
    </MuiThemeProvider>
    );
  }
}

export default Application;
