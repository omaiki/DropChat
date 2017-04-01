import React, {Component} from 'react';
import * as firebase from 'firebase';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Login from './Login.js'
import Signup from './Signup.js'

const SignupRoute = () => (
  <div>
  <Signup />
  </div>
)


const LoginRoute = () => (
  <div>
  <Login />
  </div>
)

class Header extends Component {
  render(){
    return (
    <Router>
      <nav className="navbar navbar-default">
       <div className="container-fluid">
         <div className="navbar-header">
           <Link className="navbar-brand" to="/">DropChat</Link>
         </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
          </ul>
          <Route path="/login" component={LoginRoute}/>
          <Route path="/signup" component={SignupRoute}/>
       </div>
      </nav>


     </Router>
   );
  }
}


export default Header;
