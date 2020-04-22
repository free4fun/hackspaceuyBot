const Helpers = require("../lib/Helpers.js");

class Forecast {
  constructor(ircMsg, tgMsg, ircConfig, isEnabled) {
    this.name = 'forecast';
    this._ircMsg = ircMsg;
    this._tgMsg = tgMsg;
    this.Enabled = isEnabled;
  }

  Exec(userMessage, username, isMaster, ircMsg, tgMsg) {
    var weather = require('openweather-apis');
    weather.setAPPID('8d455f2e36e6f1c5025d69a7ca263f96');
    weather.setUnits('metric');
    weather.setLang('es');
    weather.setCity('Montevideo, UY');
    var str = userMessage.replace(this.name, '');
    if (str != "") {
      str = str.substr(1);
      weather.setCity(str);
    }
    weather.getWeatherForecastForDays(3, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        try {
          if (result.cod === '200') {
            var city = result.city.name;
            var country = result.city.country;
            var string = "Lugar: "+city+", "+country;;
            console.log(string);
            ircMsg(string);
            tgMsg(string);
            for (var i = 0 ; i < 3; i++) {
              var date = Helpers.DayConverter(result.list[i].dt);
              var pressure = result.list[i].pressure
              var humidity = result.list[i].humidity;
              var max = result.list[i].temp.max;
              var min = result.list[i].temp.min;
              var windspeed = result.list[i].speed;
              var winddeg = Helpers.CompassRose(result.list[i].deg);
              var description = result.list[i].weather[0].description;
              var main = result.list[i].weather[0].main;
              var icon = Helpers.GetIcon(result.list[i].weather[0].icon);
              if (Math.round(new Date().getTime()/1000) < result.list[i].dt) {
                var string = date+" "+icon+" Condición: "+description+" Max: "+max+"°C"+" Min: "+min+"°C Humedad: "+humidity+"% Presión: "+pressure+"hPa Viento: "+windspeed+"Km/h "+winddeg;
                console.log(string);
                ircMsg(string);
                tgMsg(string);
              }
            }
          } else {
            ircMsg('Ciudad no encontrada :(');
            tgMsg('Ciudad no encontrada :(');
          }
        }
        catch(err) {
          console.log(err);
        }
      }
    });
  }

  Help() {
    var helpTxt = "!" + this.name + " [optional city, country code]";
    this._ircMsg(helpTxt);
    this._tgMsg(helpTxt);
  }
}
module.exports = Forecast;
