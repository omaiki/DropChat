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
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';

import map from 'lodash/map';


class Application extends Component {
  constructor(props) {
    super(props);

    //not logged in by default
    this.state = {
      currentUser: null
    };

    this.restaurantRef = database.ref('/restaurants');
    //Making a new chat node
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
      <div className="container">
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
            <Subheader>OTHER ROOMS</Subheader>
            <Divider/>
          { map(chats, (chat, key) => <p key={key}> { chat.name} </p>) }
            <Divider/>

          <Subheader>CREATE NEW CHAT</Subheader>

          <NewChat />
          </div>
        }


        </div>
        <div className="col s8" >
          <Subheader>CHAT ROOMS</Subheader>
          <Divider/>
        < ChatList /></div>
      </div>
      </div>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default Application;
