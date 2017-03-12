// this is where the fetch call will be to the rails-api

// function search(query) {
//   return fetch(`/v1/chats?q=${query}`, {
//     accept: 'application/json',
//   }).then(checkStatus)
//     .then(parseJSON);
// }

// we want the request to be made to the Webpack dev server, create-react-app config sets webpack server to figure out what to proxy


var api = {

  getStories(){
    var url = 'https://localhost:3000/v1/chats'
    var content_array = [];
    fetch(url).then(function(res){
        return res.json();
      })
      .then(function(jsonRes){
        return jsonRes.chats
      })
      .then(function(chats_array){
        for (var i = 0; i<chats_array.length; i++){
          content_array.push(chats_array[i].content)
        }
      })
      .done();
      return content_array;
  },

  getStory(){
    var chat = {id: 1}
    var url = 'https://localhost:3000/v1/chats/1';
    console.log(url);
    return fetch(url).then((res) => res.json()).catch(error => {
    console.log(error);
    alert(error.message);
    });
  },
};




module.exports = api;