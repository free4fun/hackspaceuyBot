const Helpers = require("../lib/Helpers.js");

class Sightings {
  constructor(ircMsg, tgMsg, ircConfig, isEnabled) {
    this.name = 'sky';
    this._ircMsg = ircMsg;
    this._tgMsg = tgMsg;
    this.Enabled = isEnabled;
  }

  Exec(userMessage, username, isMaster, ircMsg, tgMsg) {
    const https = require('https');
    https.get('https://spotthestation.nasa.gov/sightings/xml_files/Uruguay_None_Montevideo.xml', (resp) => {
      let data = '';
      resp.on('data', (chunk) => {
        data += chunk;
      });
      resp.on('end', () => {
        var parseString = require('xml2js').parseString;
        parseString(data, {trim: true}, function (err, result) {
          var items = result.rss.channel[0].item;
          var limit = 0;
          for (var i = 0; i < items.length; i++) {
            var title = items[i].title[0];
            var description = items[i].description.toString().replace(/<[^>]*>/g, '').replace(/\t/g, '').replace(/\n/g, '');
            var txtdate = title.substr(0,10).split('-');
            var year = txtdate[0];
            var month = txtdate[1];
            var day = txtdate[2];
            if (day.length < 2) day = "0" + day;
            var time = description.replace(/(Time: [0-9]?[0-9]:[0-9][0-9] (A|P)M)|[^]/g, "$1").replace(/Time: /, "");
            var amORpm = time.split(' ')[1];
            var hours = time.replace(/([0-9]?[0-9]:)|[^]/g, "$1").replace(":","");
            var minutes = time.replace(/(:[0-9]?[0-9])|[^]/g, "$1").replace(":","");
            if (hours.length < 2) {
              hours = "0"+hours;
            }
            if (amORpm == 'PM') {
              hours = parseInt(hours) + 12;
            }
            var stringDate = ""+year+"-"+month+"-"+day+"T"+hours+":"+minutes+"-03:00";
            var duration = description.replace(/(Duration: (less than)?[0-9]?[0-9] (minutes?|hours?|seconds?))|[^]/g, "$1").replace(/Duration: /, "").replace(/(inutes?|our?s|econds?)/, "").replace(/ /, '');
            if (duration == "") {
              duration = "Menos de 1 min"
            }
            var elevation = description.replace(/(Maximum Elevation: [0-9]?[0-9]?[0-9]°)|[^]/g, "$1").replace(/Maximum Elevation: /, "");
            var approach = description.replace(/(Approach: [0-9]?[0-9]?[0-9]° above [A-Z]?[A-Z]?[A-Z])|[^]/g, "$1").replace(/Approach: /, "").replace(/above/, "por encima del");
            var departure = description.replace(/(Departure: [0-9]?[0-9]?[0-9]° above [A-Z]?[A-Z]?[A-Z])|[^]/g, "$1").replace(/Departure: /, "").replace(/above/, "por encima del");
            var date = new Date(stringDate);
            var now = new Date();
            if (limit < 3) {
              if (date.getTime() >= now.getTime()) {
                var days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
                var msg = title.substr(10)+': '+days[date.getDay()]+' '+date.getDate()+' '+time+' UYT. Duración: '+duration+'. Elevación Máxima: '+elevation+'. Entrada: '+approach+'. Salida: '+departure+'.';
                ircMsg(msg);
                tgMsg(msg);
                limit++;
              }
            } else {
              return;
            }
          }
        })
      });
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
  }

  Help() {
    var helpTxt = "!" + this.name;
    this._ircMsg(helpTxt);
    this._tgMsg(helpTxt);
  }
}
module.exports = Sightings;
