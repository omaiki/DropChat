import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  render() {
    return (
      <div>
        <RaisedButton
          label="ChatRooms"
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
        {
          this.props.names.map((name, index)=>
            <MenuItem key={index}> {name} </MenuItem>
          )
        }
        </Drawer>
      </div>
    );
  }
}
