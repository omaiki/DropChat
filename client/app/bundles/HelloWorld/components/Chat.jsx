import React from 'react';


export const Chat = ({chat}) =>
  <div className='chat'>
    <h3>{chat.title}</h3>
    <p>{chat.location}</p>
  </div>