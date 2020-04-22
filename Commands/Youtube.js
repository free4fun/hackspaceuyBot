class Youtube {
    constructor(ircBot) {
}
/*
if (line[1] != undefined && line[1] != '') {
  if (isInt(line[1])) {
    var num = line[1];
    var search = text.replace(/\!yt \d+/g, '');
  } else {
    var num = 3
    var search = text.replace(/\!yt /g, '');
  }
  if (num > 7) num = 7;
  var google = require('googleapis');
  var util = require('util');
  var youtube = google.youtube({version: 'v3'});
  youtube.search.list({part: 'id,snippet',q: search,maxResults: num ,auth:'AIzaSyDlXffzDKzKYBRSdi-ZxjGMYF3LOy-DlmM' }, function (err, data) {
    if (err) {
      console.error('Error: ' + err);
    }
    if (data) {
  //console.log(util.inspect(data, false, null));
  if (data.items && data.items.length > 0) {
    for (var i = 0;i<data.items.length;i++) {
      nodeIrc.say(chanName, data.items[i].snippet.title+" https://www.youtube.com/watch?v="+data.items[i].id.videoId);
      tg(data.items[i].snippet.title+" https://www.youtube.com/watch?v="+data.items[i].id.videoId)
    }

  } else {
    nodeIrc.say(chanName, "No hay resultados");
    tg("No hay resultados");

  }
}
});

} else {
  nodeIrc.say(chanName, "Da' FUCK!");
}

nodeIrc.say(chanName, '!yt [opcional numero de entradas] <palabras a buscar en YouTube>');
*/
}

module.exports = Youtube;
