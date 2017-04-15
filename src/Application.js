import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import './Application.css';
import ChatList from './components/ChatList';
import Chats from './Chats'
import NewChat from './NewChat';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import SideNav from './SideNav.js';

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
    var chatNames = [];

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
          <div className="col s12" >

        {
          currentUser &&

          <div>
            <Subheader>OTHER ROOMS</Subheader>
            <SideNav names={chatNames} />
            {map(chats,(chat, key) =>
              {chatNames.push(chat.name)})
            }
            <Divider/>
            <Subheader>CREATE NEW CHAT</Subheader>

            <NewChat />

            <Divider/>
            <Chats chats={chats} user={currentUser}/>

          </div>
        }


        </div>


      </div>
      </div>

      </div>
    </MuiThemeProvider>
    );
  }
}

export default Application;
