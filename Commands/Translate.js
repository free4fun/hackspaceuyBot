class Translate {
    constructor(ircBot) {
}
/*
if (line[1] != undefined && line[1]!="" && line[2] != undefined && line[2] != "" && line[3] != undefined && line[3] != "") {
  var translate = text.substr(10);
  var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170518T140945Z.df40dd253b0c03d2.39da50ca8bdfc5ef8cafaf3bbf5bcd175684821d&text='+translate+'&lang='+line[1]+'-'+line[2];
  var request = require('request');
  request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'hackspaceuy'}
  }, function(err, res, data) {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      if (data != undefined && data.text[0] != undefined) {
          nodeIrc.say(chanName, data.text[0]);
          tg(data.text[0]);
      } else {
        nodeIrc.say(chanName, "No hay traducción para eso.");
        tg("No hay traducción para eso.");
      }
    }
  });

  nodeIrc.say(chanName, '!tr <idioma origen> <idioma destino> <texto a traducir>');
*/
}
module.exports = Translate;
