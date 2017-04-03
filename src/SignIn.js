import React, { Component } from 'react';
import { auth, googleAuthProvider, facebookAuthProvider, twitterAuthProvider } from './firebase';

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
      <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
      Login with Google
      </button>
      <button onClick={() => auth.signInWithPopup(facebookAuthProvider)}>
      Login with Facebook
      </button>
      <button onClick={() => auth.signInWithPopup(twitterAuthProvider)}>
      Login with Twitter
      </button>
      </div>
    );
  }
}

export default SignIn;
