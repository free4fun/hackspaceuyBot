module.exports.Add = function Add(list, username) {
  if (!module.exports.StringExistsIgnoreCase(list, username)) {
    return list.push(username);
  }
}

module.exports.Remove = function Remove(list, username) {
  if (module.exports.StringExistsIgnoreCase(list, username)) {
    return list.splice(list.indexOf(username), 1 );
  }
  return false;
}

module.exports.Exists = function Exists(array, predicate) {
  if ((array === undefined) || (array === null)) {
    return false;
  }
  for(let i = 0; i < array.length; ++i) {
    if (predicate(array[i])) {
      return true;
    }
  }
  return false;
}

module.exports.StringExistsIgnoreCase = function StringExistsIgnoreCase(array, str) {
  if((str===undefined) || (str === null)) {
    return false;
  }
  return module.exports.Exists(
    array,
    (s) => { return str.toLowerCase() === s.toLowerCase(); }
  );
}

module.exports.IsNullOrUndefined = function IsNullOrUndefined(obj) {
  return (obj === undefined) || (obj === null);
}

module.exports.Log = function Log() {
  var MongoClient = require('mongodb').MongoClient;
  MongoClient.connect('mongodb://localhost:27017/teleirc', function(err, db) {
    var collection = db.collection('log');
    var query = {};
    var update = {};
    query[user] = { $exists : true };
    update[user] = text;
    collection.update( query, update, {upsert:true} )
    db.close();
  });
}

module.exports.StripString = function StripString(string) {
  return string.replace(/\/r/g, '').replace(/\/n/g, '').replace(/;/g, '').replace(/\$/g, '').replace(/\[/g, '').replace(/\]/g, '');
}

module.exports.DateConverter = function DateConverter(UNIX_timestamp){
  var moment = require('moment-timezone');
  var a = moment(UNIX_timestamp * 1000).tz("America/Montevideo");
  var year = a.format('Y');
  var month = a.format('MM');
  var date = a.format('DD');
  var hour = a.format('HH');
  var min = a.format('mm');
  var sec = a.format('ss');
  var time = date + '/' + month + '/' + year + ' ' + hour + ':' + min;
  return time;
}

module.exports.TimeConverter = function TimeConverter(UNIX_timestamp){
  var moment = require('moment-timezone');
  var a = moment(UNIX_timestamp * 1000).tz("America/Montevideo");
  var year = a.format('Y');
  var month = a.format('MM');
  var date = a.format('DD');
  var hour = a.format('HH');
  var min = a.format('mm');
  var sec = a.format('ss');
  var time = hour + ':' + min;
  return time;
}

module.exports.DayConverter = function DayConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  return days[a.getDay()]
}

module.exports.CompassRose = function CompassRose(deg) {
  if (deg <= 22.5) return 'N';
  if (deg <= 67.5) return 'NE';
  if (deg <= 112.5) return 'E';
  if (deg <= 157.5) return 'SE';
  if (deg <= 202.5) return 'S';
  if (deg <= 247.5) return 'SW';
  if (deg <= 292.5) return 'W';
  if (deg <= 292.5) return 'W';
  if (deg <= 337.5) return 'NW';
  if (deg <= 360) return 'N';
  return 'Inválido!';
}

module.exports.IsInt = function IsInt(value) {
  return !isNaN(value) &&
  parseInt(Number(value)) == value &&
  !isNaN(parseInt(value, 10));
}

module.exports.MongoDBFindInCollection = function MongoDBFindInCollection(collec, item) {
  var MongoClient = require('mongodb').MongoClient;
  return MongoClient.connect('mongodb://127.0.0.1:27017/teleirc', { useNewUrlParser: true }).then(function(db, err) {
    var collection = db.db('teleirc').collection(collec);
    var query = {};
    if (item != undefined) query[item] = { $exists : true };
    return collection.find(query).toArray();
  });
}

module.exports.MongoDBRemoveOne = function MongoDBRemoveOne(collec, item) {
  var MongoClient = require('mongodb').MongoClient;
  return MongoClient.connect('mongodb://127.0.0.1:27017/teleirc', { useNewUrlParser: true }).then(function(db, err) {
    var collection = db.db('teleirc').collection(collec);
    var query = {};
    query[item] = { $exists : true };
    return collection.removeOne(query);
  });
}

module.exports.MongoDBUpdateOne = function MongoDBUpdateOne(collec, key, value) {
  var MongoClient = require('mongodb').MongoClient;
  return MongoClient.connect('mongodb://127.0.0.1:27017/teleirc', { useNewUrlParser: true }).then(function(db, err) {
    var collection = db.db('teleirc').collection(collec);
    var query = {};
    var update = {};
    update[key] = value;
    query['$set'] = update;
    var filter = {};
    filter[key] = { $exists : true };
    return collection.updateOne( filter, query, {upsert:true} );
  });
}

module.exports.MongoDBIncOne = function MongoDBIncOne(collec, item) {
  var MongoClient = require('mongodb').MongoClient;
  return MongoClient.connect('mongodb://127.0.0.1:27017/teleirc', { useNewUrlParser: true }).then(function(db, err) {
    var collection = db.db('teleirc').collection(collec);
    var query = {};
    var update = {};
    var update2 = {};
    update[item] =  1;
    update2['$inc'] = update;
    query[item] = { $exists : true };
    collection.updateOne( query, update2, {upsert:true} )
  });
}

module.exports.MongoDBDecOne = function MongoDBDecOne(collec, item) {
  var MongoClient = require('mongodb').MongoClient;
  return MongoClient.connect('mongodb://127.0.0.1:27017/teleirc', { useNewUrlParser: true }).then(function(db, err) {
    var collection = db.db('teleirc').collection(collec);
    var query = {};
    var update = {};
    var update2 = {};
    update[item] =  -1;
    update2['$inc'] = update;
    query[item] = { $exists : true };
    return collection.updateOne( query, update2, {upsert:true} );
  });
}

module.exports.GetIcon = function GetIcon(code) {
  var icons = {'01d':'☀' ,'01n':'🌙' , '02d':'⛅' , '02n':'⛅' , '03d':'☁' , '03n':'☁' , '04d':'☁' , '04n':'☁' , '09d':'☔' , '09n':'☔' , '10d':'☔' , '10n':'☔' , '11d':'⚡' , '11n':'⚡' , '13d':'❄' , '13n':'❄' , '50d':'🌫' , '50n':'🌫'};
  return icons[code];
}
