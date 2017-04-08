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
import getMuiTheme from 'material-ui/styles/getMuiTheme';
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
      <div class="container">
      <div className="Application">
            <AppBar
            title="DropChat"
            showMenuIconButton={false}>
              {!currentUser && <SignIn />}
              {currentUser && <CurrentUser user={currentUser} />} </AppBar>

        <div className="row">
          <div className="col s2" >

        {
          currentUser &&
          <div >


          { map(chats, (chat, key) => <p key={key}> { chat.name} </p>) }
          <NewChat />
          </div>
        }


        </div>
        <div className="col s4" >
        < ChatList /></div>
      </div>
      </div>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default Application;
