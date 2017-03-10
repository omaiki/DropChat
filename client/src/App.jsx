import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import ChatIcon from 'material-ui/svg-icons/communication/chat';
import ActionHome from 'material-ui/svg-icons/action/home';
import SocialPerson from 'material-ui/svg-icons/social/person';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever'

import Login from './Login'; //Reference to Login JSX
import Message from './Message'; //Reference to Message JSX

export default class App extends Component{
  constructor(props){
    super(props);

    this.state = {messages: []};
  }

  componentWillMount(){
    this.setState({messages: [
      {
        _id:1,
        text_content: "Whats Good Patna?",
        pic_content:"Pic",
        vid_content:"Video File",
        gif_content:"Gif File",
        chat_id:1,
        user_id:1,
        created_at:11,
        updated_at:12,
      },
      {
        _id:2,
        text_content: "What it Do Nephew?",
        pic_content:"Pic",
        vid_content:"Video File",
        gif_content:"Gif File",
        chat_id:1,
        user_id:2,
        created_at:11,
        updated_at:12,
      },
      {
        _id:3,
        text_content: "Chillen Like a Villain",
        pic_content:"Pic",
        vid_content:"Video File",
        gif_content:"Gif File",
        chat_id:1,
        user_id:1,
        created_at:11,
        updated_at:12,
      },


  ]});

  }



  render(){
    return(
    <MuiThemeProvider>
      <div className="container">
        <AppBar
          title="DropChat"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          showMenuIconButton = {false}>

          <Badge
            badgeContent={4}
            secondary={true}
            >
              <IconButton>
                <SocialPerson />
              </IconButton>

              <IconButton>
                <ChatIcon />
              </IconButton>
          </Badge>
        </AppBar>
        <div className="row">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="col s5 offset-s5"><Login /></div>
          <br/>
          <br/>
          <br/>
          <div className="col s4"><Message /></div>
        </div>
      </div>
    </MuiThemeProvider>
    )
  }
}
