require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotifyKey = new Spotify(keys.spotify);
var fs = require("fs");

// apis
var axios = require("axios")
var moment = require("moment")
// var dotenv = require("dotenv")
var omdb = require("omdb")
// var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

var search = process.argv[2];
var userInput = process.argv[3];

console.log(search);
console.log(userInput);

function input(search, userInput) {
switch(search) {
  case "concert-this":
      concert(userInput);
      break;
  
  case "spotify-this-song":
      spotify(userInput);
      break;
  
  case "movie-this":
      movie(userInput);
      break;

  case "do-what-it-says":
      // doWhatItSays()
      fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
          var output = data.split(",");
          input(output[0], output[1])
          // for (var i = 0; i < output.length; i++) {
          //     console.log(output[i]);
              
          
        });;
      break;
}
}

// Make a request for a band input
function concert(userInput) {
axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp")
  .then(function (response) {
    var bands = response.data
    for (i = 0; i < 1; i++){
      // console.log("----------", bands[i])
        console.log(bands[i].venue.name)
        console.log(bands[i].venue.city)
        // console.log(bands[i].dat=etime)
        console.log(moment(bands[i].datetime).format('MM/DD/YYYY'))
    }
});
}

// making spotify-this-song command 
// spotify api
function spotify(userInput) {
spotifyKey.search({ type: 'track', query: userInput}, 
  function(err, data){
        if (err){
            return console.log('Error: ' + err);
        }
        var jsonData = data.tracks.items[0];
        var music = [
            "artist: " + jsonData.artists[0].name,
            "song: " + jsonData.name,
            "link: " + jsonData.preview_url,
            "album: " + jsonData.album.name
        ];
        return console.log(music);
    });
  }


// movie api
function movie(userInput) {
axios.get("https://www.omdbapi.com/?t=" + userInput + "&apikey=trilogy")
// axios.get(queryURL)
  .then(function (response) {
    var movies = response.data
    for (i = 0; i < 1; i++){
        // console.log(movies)
        console.log(movies.Title)
        console.log(movies.Year)
        console.log(movies.Ratings)
        console.log(movies.Country)
        console.log(movies.Language)
        console.log(movies.Plot)
        console.log(movies.Actors)
       }
    });
  }
    
input(search, userInput);


// original code 
// require("dotenv").config();
// var keys = require("./keys.js");
// var Spotify = require('node-spotify-api');
// var spotify = new Spotify(keys.spotify);
// var fs = require("fs");

// apis
// var axios = require("axios")
// var moment = require("moment")
// var dotenv = require("dotenv")
// var omdb = require("omdb")
// var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

// Make a request for a band input
// axios.get("https://rest.bandsintown.com/artists/" + "zedd" + "/events?app_id=codingbootcamp")
//   .then(function (response) {
//     var bands = response.data
//     for (i = 0; i < 1; i++){
//         console.log(bands[i].venue.name)
//         console.log(bands[i].venue.city)
//         // console.log(bands[i].datetime)
//         console.log(moment(bands[i].datetime).format('MM/DD/YYYY'))
//     }
// });


// making spotify-this-song command 
// spotify api
// spotify.search({ type: 'track', query: "Flava In Ya Ear"}, function(err, data){
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



// movie api

// axios.get("https://www.omdbapi.com/?t=" + "Fear and Loathing in Las Vegas" + "&apikey=trilogy")
// // axios.get(queryURL)
//   .then(function (response) {
//     var movies = response.data
//     for (i = 0; i < 1; i++){
//         // console.log(movies)
//         console.log(movies.Title)
//         console.log(movies.Year)
//         console.log(movies.Ratings)
//         console.log(movies.Country)
//         console.log(movies.Language)
//         console.log(movies.Plot)
//         console.log(movies.Actors)
//        }
//     });


// use fs to take info from random.txt and use to call liri command
// fs.readFile("random.txt", "utf8", function(error, data) {
//       if (error) {
//         return console.log(error);
//       }
//         var output = data.split(",");
//         for (var i = 0; i < output.length; i++) {
//             console.log(output[i]);
//         }
//       });