 class Word {
  constructor(ircBot) {
/*
 if (line[1] != undefined && line[1] != '') {
    if (isInt(line[1])) {
      var num = line[1];
      var search = text.replace(/\!word \d +/g, '');
    } else {
      var num = 1
      var search = text.replace(/\!word /g, '');
    }
    if (num > 7) num = 7;
    var url = 'http://api.wordnik.com:80/v4/word.json/'+search+'/definitions?limit='+num+'&includeRelated=true&sourceDictionaries=all&useCanonical=true&includeTags=false&api_key=121ace68709cbe57c80020b037a03cd6c9c444de2e0377171';
    var request = require('request');
    request.get({
      url: url,
      json: true,
      headers: {'User-Agent': 'request'}
    }, function(err, res, data) {
      if (err) {
        console.log('Error:', err);
      } else if (res.statusCode !== 200) {
        console.log('Status:', res.statusCode);
      } else {
        var foundsomething = false;
        for (var i = 0; i < num; i++) {
          if (data[i] != undefined && data[i].word != undefined && data[i].text != undefined) {
            var result = data[i].word+": "+ data[i].text;
            nodeIrc.say(chanName, result);
            tg(result);
            foundsomething = true;
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
  }*/
  }
  //nodeIrc.say(chanName, '!word [opcional numero de entradas] <palabras a buscar en Wordnik>');

}

module.exports = Word;
