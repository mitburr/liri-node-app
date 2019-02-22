
require("dotenv").config();
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);


let operator = process.argv[2];
let argument = process.argv.slice(3).join(" ");


let concertThis = function (artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + keys.BIT.apiKey)
        .then(function (response) {
            //formatting to fit the moment format
            let str = response.data[0].datetime;
            let day = str.split("T");
            //console logging the requested data
            console.log(artist + "'s next show is at " + response.data[0].venue.name  + " in " +  response.data[0].venue.city + ","  + response.data[0].venue.region + " on " + moment(day[0]).format("MM/DD/YYYY")) ;
        })
        .catch(function (error) {
            if (error.response) {
                //copy pasted from a different .catch
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

let spotifyThisSong = function(songName){
    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
      console.log("the first result for you search query is " + data.tracks.items[0].name + " by " + data.tracks.items[0].album.artists[0].name + " from the album " + data.tracks.items[0].album.name +". It can be found at " + data.tracks.items[0].album.external_urls.spotify);
      });
}
    
let movieThis = function(movie){
    if(!movie){movie = "Mr. Nobody"};
    movie.split(" ").join("+");
    axios.get("http://www.omdbapi.com/?apikey=" + keys.OMDB.apiKey + "&t=" + movie)
        .then(function (response) {
            console.log("The movie " + response.data.Title + " and it was released on " + response.data.Released + 
            ". \nIt has a rating of  " + response.data.Ratings[0].Value + " on IMDB and " + response.data.Ratings[1].Value + " fresh on Rotten Tomatoes \nIt was produced in " +
            response.data.Country + " and it includes languages " + response.data.Language  + ". The plot of the film is: \n"  + 
            response.data.Plot + " \n The film is acted by " + response.data.Actors + ".");


    //    * Title of the movie.
    //    * Year the movie came out.
    //    * IMDB Rating of the movie.
    //    * Rotten Tomatoes Rating of the movie.
    //    * Country where the movie was produced.
    //    * Language of the movie.
    //    * Plot of the movie.
    //    * Actors in the movie.
        })
        .catch(function (error) {
            if (error.response) {
                //copy pasted from a different .catch
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

// operator parse
if (operator === "spotify-this-song") { spotifyThisSong(argument); }
else if (operator === "concert-this") { concertThis(argument); }
else if (operator === "movie-this") { movieThis(argument) }
else if (operator === "do-what-it-says") { spotifyThisSong(); concertThis(); movieThis(); }
