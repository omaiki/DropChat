import React, { Component } from 'react';
import { auth, googleAuthProvider, facebookAuthProvider } from './firebase';

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
      <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
      Login with Google Account
      </button>
      <button onClick={() => auth.signInWithPopup(facebookAuthProvider)}>
      Login with Facebook Account
      </button>
      </div>
    );
  }
}

export default SignIn;
