import React, {Component} from 'react';
import * as firebase from 'firebase';

class Header extends Component {
  render(){
    return (
      <nav className="navbar navbar-default">
       <div className="container-fluid">
         <div className="navbar-header">
           <a href="/" className="navbar-brand">React2Gifs</a>
         </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">Sign Up</a>
            </li>
          </ul>
       </div>
     </nav>
   );
  }
}


export default Header;
