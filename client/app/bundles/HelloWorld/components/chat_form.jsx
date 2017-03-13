import React from 'react';

import Datetime from 'react-datetime';

export default class ChatForm extends React.Component {
  handleChange (e) {
    const name = e.target.name;
    const obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  }

  setLocation(e) {
    const name = 'location';
    const obj = {};
    if(obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  }

  render () {
    const inputProps = {
      name: 'location'
    };

    return (
      <div>
        <h2>Make a new Chat</h2>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input name='title' placeholder='Chat Title'
            value={this.props.input_title}
            onChange={(event) => this.handleChange(event)} />

          <Datetime input={false} open={true} inputProps={inputProps}
            value={this.props.location}
            onChange={(event) => this.setLocation(event)} />

          <input type='submit' value='Make Chat' className='submit-button' />
        </form>
      </div>
    )
  }
}
