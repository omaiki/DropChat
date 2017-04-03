import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBkPJRtqSljewG8yXSyL9sx93Z1V2RC300",
    authDomain: "lunch-rush-92b00.firebaseapp.com",
    databaseURL: "https://lunch-rush-92b00.firebaseio.com",
    projectId: "lunch-rush-92b00",
    storageBucket: "lunch-rush-92b00.appspot.com",
    messagingSenderId: "1067955453108"
  };

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
