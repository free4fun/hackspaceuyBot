const Helpers = require("../lib/Helpers.js");

class Movie {
  constructor(ircMsg, tgMsg, ircConfig, isEnabled) {
    this.name = 'movie';
    this._ircMsg = ircMsg;
    this._tgMsg = tgMsg;
    this.Enabled = isEnabled;
  }

  Exec(userMessage, username, isMaster, ircMsg, tgMsg) {
    var str = userMessage.replace(this.name + ' ', '');
    if (str != "") {
      var s = str.split(' ');
      if (Helpers.IsInt(s[0])) {
        var num = parseInt(s[0]);
        var search = str.replace(s[0]+' ', '');
      }
      else {
        var num = 1
        var search = str;
      }
      if (num > 3) num = 3;
      var url = 'https://api.themoviedb.org/3/search/movie?api_key=e96a3c794f6a01a8e71a172c26d66df1&language=es-UY&query='+search;
      var request = require('request');
      request.get({
        url: url,
        json: true,
        headers: {'User-Agent': 'Thank you TheMovieDB says HackspaceUY'}
      }, function(err, result, response) {
        if (err) console.log('Error:', err);
        else if (result.statusCode !== 200) console.log('Status:', result.statusCode);
        else {
          var foundsomething = false;
          for (var i = 0; i < num; i++) {
            if (response.results != undefined && response.results[i] != undefined && response.results[i].overview.length > 1) {
              foundsomething = true;
              var data = response.results[i]
              var genres = { 28:"Acción",12:"Aventura",16:"Animación",35:"Comedia",80:"Crimen",99:"Documental",18:"Drama",10751:"Familiar",14:"Fantasía", 36:"Historia",27:"Horror",10402:"Musical",9648:"Misterio",10749:"Romance",878:"Ciencia Ficción", 10770 : "TV", 53:"Thriller",10752:"Bélica",37:"Western" };
              var genre = " Género:";
              for (var j in data.genre_ids) {
                genre = genre +" "+genres[data.genre_ids[j]];
              }
              if (genre == " Género:") genre = '';
              else { genre = genre+"."; }
              var result = data.title+" ("+data.release_date.substring(0,4)+")."+genre+" Rating: "+data.vote_average+". "+data.overview.substring(0,200)+"...";
              if (result != undefined) {
                ircMsg(result);
                tgMsg(result)
              }
            }
          }
          if (!foundsomething) {
            ircMsg("No hay resultados");
            tgMsg("No hay resultados");
          }
        }
      });
    }
  }

  Help() {
    var helpTxt = "!" + this.name + " [optional response numbers] <Movie title to search in TheMovieDB>";
    this._ircMsg(helpTxt);
    this._tgMsg(helpTxt);
  }
}
module.exports = Movie;
