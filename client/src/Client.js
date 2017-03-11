// this is where the fetch call will be to the rails-api

function search(query) {
  return fetch(`/v1/chats?q=${query}`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON);
}

// we want the request to be made to the Webpack dev server, create-react-app config sets webpack server to figure out what to proxy