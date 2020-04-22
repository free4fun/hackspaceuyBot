class Weather {
    constructor(ircBot) {
}
/*
var weather = require('openweather-apis');
weather.setAPPID('8d455f2e36e6f1c5025d69a7ca263f96');
weather.setUnits('metric');
weather.setLang('es');
weather.setCity('Montevideo, Uruguay');
if (line[1] != undefined) {
  weather.setCity(text.substr(8));
}
weather.getAllWeather(function(err, result){
  if(err) {
    console.log(err)
  } else {
    //console.log(result)
    try{
      var description = result.weather[0].description;
      var temp = result.main.temp;
      var pressure = result.main.pressure;
      var humidity = result.main.humidity;
      var visibility = result.visibility/1000;
      var windspeed = result.wind.speed;
      var winddeg = rosaDeLosVientos(result.wind.deg);
      var sunrise = timeConverter(result.sys.sunrise);
      var sunset = timeConverter(result.sys.sunset);
      var city = result.name;
      var country = result.sys.country;
      var date = dateConverter(result.dt);
      var icon = icons[result.weather[0].icon];
      var string0 = "Lugar: "+city+", "+country+" Actualizado: "+date+"UYT";
      var string1 = 'Condición: '+icon+" "+description+" Temperatura: "+temp+"°C Humedad: "+humidity+"% Presión: "+pressure+"hPa Viento: "+windspeed+"Km/h "+winddeg+" Visibilidad: "+visibility+"Km Amanecer: "+sunrise+"UYT Ocaso: "+sunset+"UYT";
      nodeIrc.say(chanName, string0);
      nodeIrc.say(chanName, string1);
      tg(string0);
      tg(string1);

    } catch(err) {
      console.log(err);
      nodeIrc.say(chanName, 'Ciudad no encontrada :(');
      tg('Ciudad no encontrada :(');


    }

    nodeIrc.say(chanName, '!weather [opcional ciudad]');
*/
}

module.exports = Weather;
