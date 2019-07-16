require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios")

// spotify test
//     spotify.search({ type: 'track', query: 'Flava In Ya Ear'}, function(err, data){
//         if (err){
//             return console.log('Error: ' + err);
//         } 
//         var jsonData = data.tracks.items[0];
//         var music = [
//             "artist: " + jsonData.artists[0].name,
//             "song: " + jsonData.name,
//             "link: " + jsonData.preview_url,
//             "album: " + jsonData.album.name
//         ];
//         console.log(music);
//     });

// Make a request for a band input
// axios.get("https://rest.bandsintown.com/artists/" + "zedd" + "/events?app_id=codingbootcamp")
// // var jsonData = data.description.venue.datetime
//   .then(function (response) {
//     var bands = response.data
//     for (i = 0; i < 1; i++){
//         console.log(bands[i].venue.name)
//         console.log(bands[i].venue.city)
//         console.log(bands[i].datetime)
        // need to convert to mm/dd/yyyy
    // }
    // handle success
    // console.log(response.data)
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

// movie api
axios.get("https://www.omdbapi.com/?t=" + "Fear and Loathing in Las Vegas" + "&apikey=trilogy")
  .then(function (response) {
    var movies = response.data
    for (i = 0; i < 5; i++){
        console.log(movies)
       }
  });