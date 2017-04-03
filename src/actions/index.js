import request from 'superagent';
import { browserHistory } from 'react-router';
import Firebase from 'firebase';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const REQUEST_GIFS = 'REQUEST_GIFS';
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';

const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=dc6zaTOxFJmzC';

const config = {
  apiKey: "AIzaSyBOtUift82Bq8CFIklt-kbRx5QFjcb8P2g",
  authDomain: "refire-app.firebaseapp.com",
  databaseURL: "https://refire-app.firebaseio.com",
  storageBucket: "refire-app.appspot.com",
  messagingSenderId: "201898147893"
};

export function requestGifs(term = null) {
  return function(dispatch) {
    request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`).then(response => {
      dispatch({
        type: REQUEST_GIFS,
        payload: response
      });
    });
  }
}

export function openModal(gif) {
  return {
    type: OPEN_MODAL,
    gif
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

export function signInUser()
{
  browserHistory.push('/favorites');

  return {
    type: SIGN_IN_USER
  }
}


export function signOutUser()
{
  browserHistory.push('/');

  return {
    type: SIGN_OUT_USER
  }
}
