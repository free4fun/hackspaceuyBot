class Wp {
	constructor(ircBot) {
/*
 if (line[1] != undefined && line[1] != '') {
    if (isInt(line[1])) {
      var num = line[1];
      var search = text.replace(/\!wp \d +/g, '');
    } else {
      var num = 3
      var search = text.replace(/\!wp /g, '');
    }
    if (num > 7) num = 7;
    var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+search+'&limit='+num+'&namespace=0&format=json';
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
        data = data instanceof Array ? data : [data];
        var foundsomething = false;
        for (var i = 0; i < num; i++) {
          if (data[1][i] != undefined && data[2][i] != undefined && data[3][i] != undefined) {
            result = data[1][i]+": "+data[2][i]+" "+data[3][i]
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
  }
*/
}
  //nodeIrc.say(chanName, '!wp [opcional numero de entradas] <palabras a buscar en Wikipedia Ingles>');
}
module.exports = Wp;
