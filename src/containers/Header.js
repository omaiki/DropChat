import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

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
       </div>
     </nav>
     </Router>
   );
  }
}

function mapStateToProps(state){
  return {}
}


export default connect(mapStateToProps)(Header);
