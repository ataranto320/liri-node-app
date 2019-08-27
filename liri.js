require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// apis
var axios = require("axios")
var moment = require("moment")
// var dotenv = require("dotenv")
var omdb = require("omdb")
// var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

// Make a request for a band input
axios.get("https://rest.bandsintown.com/artists/" + "zedd" + "/events?app_id=codingbootcamp")
  .then(function (response) {
    var bands = response.data
    for (i = 0; i < 1; i++){
        console.log(bands[i].venue.name)
        console.log(bands[i].venue.city)
        // console.log(bands[i].datetime)
        console.log(moment(bands[i].datetime).format('MM/DD/YYYY'))
    }
});

// making spotify-this-song command 
// spotify api
spotify.search({ type: 'track', query: 'Flava In Ya Ear'}, function(err, data){
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
        console.log(music);
    });


// movie api
axios.get("https://www.omdbapi.com/?t=" + "Fear and Loathing in Las Vegas" + "&apikey=trilogy")
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
    // var movie = function(){
    //     var divider = "\n---\n"
//     }
//   });

//   false.appendFile("random.txt", movies + divider, function(err){
//     if (err) throw err;
//     console.log(movies);
// });

// // making movie command
// var movieThis = require("movie-this")
// var movie = function(){
//     var divider = "\n---\n"
// }

// this.findMoive = function(movie){
//     var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
//     axois.get(URL).then(function(response){
//         var jsonData = response.data;

//         var showMovieData = [
//             "title: " + jsonData.title,
//             "year: " + jsonData.year,
//             "imdbrating: " + jsonData.imdbrating,
//             "rtrating: " + jsonData.rtrating,
//             "country: " + jsonData.country,
//             "language: " + jsonData.language,
//             "plot: " + jsonData.plot,
//             "actors: " + jsonData.actors
//         ].join("\n\n");

//         false.appendFile("random.txt", movies + divider, function(err){
//             if (err) throw err;
//             console.log(movies);
//         });
//     });
// };

// use fs to take info from random.txt and use to call liri command

// module.exports