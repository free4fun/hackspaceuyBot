class Url {
    constructor(ircBot) {
}
/*
checkMustTell(user, chanName, nodeIrc);
var urlRegex = /((?:(http|https|Http|Https|rtsp|Rtsp):\/\/(?:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,64}(?:\:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,25})?\@)?)?((?:(?:[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}\.)+(?:(?:aero|arpa|asia|a[cdefgilmnoqrstuwxz])|(?:biz|b[abdefghijmnorstvwyz])|(?:cat|com|coop|c[acdfghiklmnoruvxyz])|d[ejkmoz]|(?:edu|e[cegrstu])|f[ijkmor]|(?:gov|g[abdefghilmnpqrstuwy])|h[kmnrtu]|(?:info|int|i[delmnoqrst])|(?:jobs|j[emop])|k[eghimnrwyz]|l[abcikrstuvy]|(?:mil|mobi|museum|m[acdghklmnopqrstuvwxyz])|(?:name|net|n[acefgilopruz])|(?:org|om)|(?:pro|p[aefghklmnrstwy])|qa|r[eouw]|s[abcdeghijklmnortuvyz]|(?:tel|travel|t[cdfghjklmnoprtvwz])|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw]))|(?:(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9])\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[0-9])))(?:\:\d{1,5})?)(\/(?:(?:[a-zA-Z0-9\;\/\?\:\@\&\=\#\~\-\.\+\!\*\'\(\)\,\_])|(?:\%[a-fA-F0-9]{2}))*)?(?:\b|$)/gi;
var icons = {'01d':'☀' ,'01n':'🌙' , '02d':'⛅' , '02n':'⛅' , '03d':'☁' , '03n':'☁' , '04d':'☁' , '04n':'☁' , '09d':'☔' , '09n':'☔' , '10d':'☔' , '10n':'☔' , '11d':'⚡' , '11n':'⚡' , '13d':'❄' , '13n':'❄' , '50d':'🌫' , '50n':'🌫'};
global.tgChan = message.channel;
global.tgCallBack = msgCallback;
if (text.match(urlRegex)) {
 var cheerio = require('cheerio');
 var request = require('request');
 request({
  method: 'GET',
  url: text,
  headers: {'user-agent': 'bot.hackspace.org.uy'} }, function(err, response, body) {
    if (err) {
      console.log('Error al parsear URL')
      console.error(err);
      return
    }
    $ = cheerio.load(body);
    var title = $("title").text().substr(0, 120);
    var description = $("description").text().substr(0, 120);
    var toSay = '';
    if (title != undefined && title != '') toSay += title;
    //if (description != undefined && description != '' && description != title) toSay += ' '+description;
    if (toSay != '') {
      nodeIrc.say(chanName, toSay.replace(/([ \t]*\n)/gm, ""));
    }
    //console.log(title);
    //console.log(description);
  });
*/
}
module.exports = Url;
