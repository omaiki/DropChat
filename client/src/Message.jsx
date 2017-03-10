import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import PhotoIcon from 'material-ui/svg-icons/image/photo';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Divider from 'material-ui/Divider';


import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {
  marginLeft: 20,
};

export default class messages extends Component{
  render(){
    return(
      <div>
      <Paper zDepth={2}>

          <ListItem
            disabled={true}
            leftAvatar={
              <Avatar
                color={deepOrange300}
                backgroundColor={purple500}
                size={30}
                style={style}
                >OM </Avatar>
              }>
              Whats Good Patna?
            </ListItem>
            <Divider />
            <ListItem
              disabled={true}
              rightAvatar={
                <Avatar
                  color={deepOrange300}
                  backgroundColor={blue300}
                  size={30}
                  style={style}
                  >MB </Avatar>
                }>
                Nm Chillen Like a Villain
              </ListItem>
          <Divider />
          <ListItem
            disabled={true}
            leftAvatar={
              <Avatar
                color={deepOrange300}
                backgroundColor={purple500}
                size={30}
                style={style}
                >OM </Avatar>
              }>
              Whats Good Patna?
            </ListItem>
            <Divider />
            <ListItem
              disabled={true}
              rightAvatar={
                <Avatar
                  color={deepOrange300}
                  backgroundColor={blue300}
                  size={30}
                  style={style}
                  >MB </Avatar>
                }>
                Nm Chillen Like a Villain
              </ListItem>
          <Divider />
          <ListItem
            disabled={true}
            leftAvatar={
              <Avatar
                color={deepOrange300}
                backgroundColor={purple500}
                size={30}
                style={style}
                >OM </Avatar>
              }>
              Whats Good Patna?
            </ListItem>
            <Divider />
            <ListItem
              disabled={true}
              rightAvatar={
                <Avatar
                  color={deepOrange300}
                  backgroundColor={blue300}
                  size={30}
                  style={style}
                  >MB </Avatar>
                }>
                Nm Chillen Like a Villain
              </ListItem>
          <Divider />

        <Divider />
      <TextField hintText="Send Message" name="ChatInput" style={style} underlineShow={false} multiLine={true}  />
      <IconButton><PhotoIcon /></IconButton>
      </Paper>
    </div>
    )
  }
}
