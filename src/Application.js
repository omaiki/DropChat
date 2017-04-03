import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import Restaurants from './Restaurants';
import './Application.css';
import ChatList from './components/ChatList';
import NewChat from './NewChat';

class Application extends Component {
  constructor(props) {
    super(props);

    //not logged in by default
    this.state = {
      currentUser: null
    }
  }

  //when component mount
  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      console.log('AUTH_CHANGE', currentUser);
      this.setState({ currentUser});
    });

  }

  render() {
    const { currentUser } = this.state;

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
