class Radio {
    constructor(ircBot) {
}
/*
if (line[1] == undefined) {
  var url = 'http://llamarada.hackspace.uy:8000/status-json.xsl';
  getjson(url, function(err, data) {
    if(err) return console.error(err);
    if (data != undefined) {
      nodeIrc.say(chanName, 'Currently playing: '+data.icestats.source.title);
      tg('Currently playing: '+data.icestats.source.title);
    }
  });
} else {

  var url = 'http://admin.radio.hackspace.uy/api/live-info';
  switch(line[1]) {
    case 'url':
    nodeIrc.say(chanName, 'URL: http://radio.hackspace.uy/ DIRECT STREAM: http://llamarada.hackspace.uy:8000/radio');
    tg('URL: http://radio.hackspace.uy/ DIRECT STREAM: http://llamarada.hackspace.uy:8000/radio');
    break;
    case 'playing':
    var url = 'http://llamarada.hackspace.uy:8000/status-json.xsl';
    getjson(url, function(err, data) {
      if(err) return console.error(err);
      if (data != undefined) {
        nodeIrc.say(chanName, 'Currently playing: '+data.icestats.source.title);
        tg('Currently playing: '+data.icestats.source.title);
      }
    });
    break;
    case 'previous':
    getjson(url, function(err, data) {
      if(err) return console.error(err);
      if (data != undefined) {
        nodeIrc.say(chanName, 'Previously played: '+data.previous.name);
        tg('Previously played: '+data.previous.name);
      }
    });
    break;
    case 'next':
    getjson(url, function(err, data) {
      if(err) return console.error(err);
      if (data != undefined) {
        nodeIrc.say(chanName, 'Nextly playing: '+data.next.name);
        tg('Nextly playing: '+data.next.name);
      }
    });
    break;
    case 'show':
    switch(line[2]) {
      case 'playing':
      getjson(url, function(err, data) {
        if(err) return console.error(err);
        if (data != undefined) {
          nodeIrc.say(chanName, 'Actual Show: '+data.currentShow[0].name);
          tg('Actual Show: '+data.currentShow[0].name);
        }
      });
      break;
      case 'next':
      getjson(url, function(err, data) {
        if(err) return console.error(err);
        if (data != undefined) {
          nodeIrc.say(chanName, 'Next Show: '+data.nextShow[0].name + ' Starting time: '+data.nextShow[0].start_timestamp);
          tg('Next Show: '+data.nextShow[0].name + ' Starting time: '+data.nextShow[0].start_timestamp);
        }
      });
      break;
    }
    break;
    case 'peak':
    var url = 'http://llamarada.hackspace.uy:8000/status-json.xsl';
    getjson(url, function(err, data) {
      if(err) return console.error(err);
      if (data != undefined) {
        nodeIrc.say(chanName, 'Listeners Peak: ' + data.icestats.source.listener_peak);
        tg('Listeners Peak: ' + data.icestats.source.listener_peak);
      }
    });
    break;
    case 'listeners':
    var url = 'http://llamarada.hackspace.uy:8000/status-json.xsl';
    getjson(url, function(err, data) {
      if(err) return console.error(err);
      if (data != undefined) {
        nodeIrc.say(chanName, 'Listeners Actual: ' + data.icestats.source.listeners);
        tg('Listeners Actual: ' + data.icestats.source.listeners);
      }
    });
    break;
  }
}


var getRadioXSL = function loadDataAndParseJSON(url, callback) {
  var http = require('http');
  http.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
      body += chunk;
    });

    res.on('end', function(){
      return callback(null, body);
    });
  }).on('error', function(e){
    console.log("Got an error: ", e);
  });
}

nodeIrc.say(chanName, '!radio <playing|next|previous|peak|listeners|show playing|show next|url>');
*/
}

module.exports = Radio;
