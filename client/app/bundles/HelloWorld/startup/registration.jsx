import ReactOnRails from 'react-on-rails';

import HelloWorld from '../components/HelloWorld';
import Chats from '../components/chats';
import Appointments from '../components/appointments';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Chats,
  Appointments,
});
