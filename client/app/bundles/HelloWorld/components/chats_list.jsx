import React from 'react';

import { Chat } from './Chat'

export const ChatsList = ({chats}) =>
  <div>
    {chats.map(function(chat) {
      return (
        <Chat chat={chat} key={chat.id} />
      )
    })}
  </div>