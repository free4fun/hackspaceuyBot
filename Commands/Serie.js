class Serie {
    constructor(ircBot) {
    }
    /*
if (line[1] != undefined && line[1] != '') {
    if (isInt(line[1])) {
      var num = line[1];
      var search = text.replace(/\!serie \d +/g, '');
    } else {
      var num = 1
      var search = text.replace(/\!serie /g, '');
    }
    if (num > 7) num = 7;
    var url = 'https://api.themoviedb.org/3/search/tv?api_key=e96a3c794f6a01a8e71a172c26d66df1&language=es-UY&query='+search;
    var request = require('request');
    request.get({
      url: url,
      json: true,
      headers: {'User-Agent': 'Thank you TheMovieDB says HackspaceUY'}
    }, function(err, res, data) {
      if (err) {
        console.log('Error:', err);
      } else if (res.statusCode !== 200) {
        console.log('Status:', res.statusCode);
      } else {
        var foundsomething = false;
        for (var i = 0; i < num; i++) {
          console.log(data)
          if (data.results != undefined && data.results[i] != undefined && data.results[i].overview.length > 1 && data.results[i].first_air_date != null && data.results[i].first_air_date.length > 1) {
            foundsomething = true;
            getTheMovieDB_serie_Data(data.results[i], function(err, result) {
            if (result != undefined) {
              nodeIrc.say(chanName, result);
              tg(result)
              }
            });
          }
        }
        if (!foundsomething) {
          nodeIrc.say(chanName, "No hay resultados");
          tg("No hay resultados")
        }
      }
    });
  } else {
    nodeIrc.say(chanName, "Da' FUCK!");
  }


  var getTheMovieDB_serie_Data = function (data, callback) {
    var genres =  { 10759:"Acción & Aventura",16:"Animación",35:"Comedia",80:"Crimen",99:"Documental",18:"Drama",10751:"Familiar",10762:"Niños", 9648:"Misterio",10763:"Noticias",10764:"Reality",10765:"Ciencia Ficción y Fantasía",10766:"Soap",10767:"Charla",10768:"Guerra & Política",37:"Western" };
    var genre = " Género:";
    for (var i in data.genre_ids) {
      genre = genre +" "+genres[data.genre_ids[i]];
    }
    if (genre == " Género:") {
      genre = '';
    } else {
      genre = genre+".";
    }
    var result = data.name+" ("+data.first_air_date.substring(0,4)+")."+genre+" Rating: "+data.vote_average+". "+data.overview.substring(0,200)+"...";
    return callback(null, result);
  }

  nodeIrc.say(chanName, '!serie [opcional numero de entradas] <Serie a buscar en TheMovieDB>');
*/
}

module.exports = Serie;
