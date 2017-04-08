import React, { PropTypes } from 'react';
import { auth } from './firebase';
import './CurrentUser.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CurrentUser = ({ user }) => {
  return (
    <div className="CurrentUser">
      <Card>
        <CardHeader
       title={user.displayName}
       subtitle={user.email}
       avatar= {user.photoURL}
     >  <button onClick={() => auth.signOut()}>
               Sign Out
            </button>
          </CardHeader>
     {/*
       <img
       className="CurrentUser--photo"
          src={ user.photoURL }
          alt={ user.displayName }
       />
<
       <div className="CurrentUser--identification">
       <h3> {user.displayName } </h3>
       <p> { user.email } </p>*/}
       <div className="CurrentUser--identification">

       </div>
     </Card>
    </div>

  );
};

CurrentUser.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    uid: PropTypes.string.isRequired
  })
};

export default CurrentUser;
