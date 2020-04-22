class Tell {
    constructor(ircBot) {
    }
    /*
if (line[1] != undefined && line[1]!="" && line[2] != undefined && line[2] != "") {
  if (user == line[1]) {
    nodeIrc.say(chanName, user+": necesitas unas horas de sueño...");
  } else {
  var message = text.replace(/\!tell/, '').replace(line[1],'').substring(2, message.length);
   saveToTell(line[1], user, message, nodeIrc, chanName);
 }
} else {
    nodeIrc.say(chanName, "Da' FUCK!");
    tg("Da' FUCK!");
}

function saveToTell(to, from, message, nodeIrc, chanName) {
  var mustTell = true;
  var MongoClient = require('mongodb').MongoClient;
  MongoClient.connect('mongodb://localhost:27017/teleirc', function(err, db) {
    var collection = db.collection('tell');
    var count = collection.find({to:to, from:from}).count(function (e, count) {
      console.log(count);
      if (count >= 3) {
        nodeIrc.say(chanName, from+': Ya tiene 3 mensajes tuyos...');
        tg(from+': Ya tiene 3 mensajes tuyos...')
        mustTell = false;
      }
      if (mustTell) {
        collection.ensureIndex({to:to, from:from} , {unique: true});
        collection.insert({to:to, from:from, message:message});
        nodeIrc.say(chanName, "Se lo voy a decir a "+to+" cuando aparezca...");
        tg("Se lo voy a decir a "+to+" cuando aparezca...");
      }
      db.close();

      db.close();
    });

  });

}

function checkMustTell(user, chanName, nodeIrc) {
  var MongoClient = require('mongodb').MongoClient;
  MongoClient.connect('mongodb://localhost:27017/teleirc', function(err, db) {
    var collection = db.collection('tell');
    collection.find({to:user}).toArray(function(err, elem) {
      if (err) {
        console.log(err)
        return
      }
      for (var i = 0;i<elem.length;i++) {
        nodeIrc.say(chanName, user+', '+elem[i].from+' me manda decir: '+elem[i].message);
        tg(user+', '+elem[i].from+' me manda decir: '+elem[i].message)
      }
      collection.remove({to:user});
      db.close();
    });
  });
}


nodeIrc.say(chanName, '!tell <nick> <mensaje>');
*/
}
module.exports = Tell;
