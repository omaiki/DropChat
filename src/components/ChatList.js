import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Chat from './Chat.js'
import Chat2a from './Chat2a.js'

import * as firebase from 'firebase';


// components cannot be hard coded
// how to dynamically add and link ??
const ChatList = () => (
  <Router>
    <div>
      <ul>
        <a href="#"><button><Link to="/chat1">Chat 1</Link></button></a>
        <a href="#"><button><Link to="/chat2">Chat 2</Link></button></a>
      </ul>

      <hr/>

      <Route path="/chat1" component={Chat1}/>
      <Route path="/chat2" component={Chat2}/>
    </div>
  </Router>
)


const Chat1 = () => (
  <div>
    <Chat />

  </div>
)

const Chat2 = ({ match }) => (
  <div>
    <Chat2a />

  </div>
)



export default ChatList
