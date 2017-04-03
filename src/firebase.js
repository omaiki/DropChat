import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBOtUift82Bq8CFIklt-kbRx5QFjcb8P2g",
    authDomain: "refire-app.firebaseapp.com",
    databaseURL: "https://refire-app.firebaseio.com",
    projectId: "refire-app",
    storageBucket: "refire-app.appspot.com",
    messagingSenderId: "201898147893"
  };

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
