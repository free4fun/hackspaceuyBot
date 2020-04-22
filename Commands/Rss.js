class Rss {
    constructor(ircBot) {
}
/*
if (line[1] != undefined && line[1] != '') {
  if (line[1] == 'off') {
    clearInterval(global.rssInterval);
    clearInterval(global.sendRssInterval);
    global.rss = '';
    global.sendRss = '';
    global.rssRunning = false;
  } else if(line[1] == 'on') {
    if (global.rssRunning == false) {
      loadRss();
      global.rssRunning = true;
      global.rss = getRss();
      global.sendRss = sendRss(nodeIrc, chanName);
      nodeIrc.say(chanName, 'Done!');
    } else {
      nodeIrc.say(chanName, 'RSS already running...')
    }
  } else if(line[1] == 'add') {
    if (line[2] != undefined && line[2] != '' && line[3] != undefined && line[3] != '') {
      var name = '';
      for (var i = 3;i<line.length;i++) {
        name = name + line[i] + " ";
      }
      addRss(line[2], name.trim());
      loadRss();
    }
  }
  else if(line[1] == 'load') {
    loadRss();
  }
  else {
    nodeIrc.say(chanName, 'DA Fuck');
  }
  function parseRSS(url, nodeIrc, chanName, times) {
   var options = [addmeta = true]
   var FeedParser = require('feedparser');
   var request = require('request');
   var arr = []
   var req = request(url);
   req.setHeader('user-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36');
   req.setHeader('accept', 'text/html,application/xhtml+xml');
   var feedparser = new FeedParser();

   req.on('error', function (error) {
   });

   req.on('response', function (res) {
    var stream = this;
    if (res.statusCode !== 200) {
      this.emit('error', new Error('Bad status code'));
    }
    else {
      stream.pipe(feedparser);
    }
  });

   feedparser.on('error', function (error) {
    console.log("Error fetching RSS");
  });


   feedparser.on('readable', function () {
    var stream = this;
    var meta = this.meta;
    var item;
    while (item = stream.read()) {
    }
  });

   feedparser.on('data', function(article) {
    arr.push(article);
  });
   feedparser.on('end', function() {
    if (typeof parseInt(times) == "number") {
     var j = times;
   } else {
     var j = 3;
   }
   for (i=0;i<j;i++) {
    nodeIrc.say(chanName, arr[i].date.toISOString().replace(/T/, ' ').replace(/\..+/, '')+" "+arr[i].title +" "+arr[i].author+" "+arr[i].link);
    tg(arr[i].date.toISOString().replace(/T/, ' ').replace(/\..+/, '')+" "+arr[i].title +" "+arr[i].author+" "+arr[i].link)
  }
  })
  }


  exports.getRss = function() {
    var minutes = 3;
    var the_interval = minutes * 60 * 1000;
    global.rssInterval = setInterval(function() {
      for (var j = 0;j<global.arrayRssUrl.length;j++) {
        requestRss(global.arrayRssUrl[j][0],arrayRssUrl[j][1])

      }
    }, the_interval);
  }

  exports.sendRss = function(nodeIrc, chanName) {
    var minutes = 5
    var the_interval = minutes * 60 * 1000;
    var ids = []
    global.sendRssInterval = setInterval(function() {
      var MongoClient = require('mongodb').MongoClient;
      MongoClient.connect('mongodb://localhost:27017/teleirc', function(err, db) {
        var collection = db.collection('rss');
        collection.find({read:0}).toArray(function(err, elem) {
          if (err) {
            console.log(err)
            return
          }
          if (elem.length > 0) {
            for (var i = 0;i<elem.length;i++) {
              (function(ind, elem) {
                setTimeout(function(){
                  try {
                    console.log(elem[ind]);
                    nodeIrc.say(chanName,elem[ind].source+": "+elem[ind].text+" "+elem[ind].link);
                    ids[ind] = elem[ind]._id;
                    marksRssAsRead(elem[ind]._id);
                  } catch (err) {
                    console.log(err)
                  }
                }, 3000 * ind);
              })(i, elem)
            }
          }
        });
        db.close();
      })
    }, the_interval);
  }

  function marksRssAsRead(id) {
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect('mongodb://localhost:27017/teleirc', function(err, db) {
      var collection = db.collection('rss');
      collection.update({_id: id}, { $set: {read : 1 }});
      db.close();
    });

  }

  function requestRss(name, url) {
    setTimeout(function(){
      var arr = []
      var options = [addmeta = true]
      var FeedParser = require('feedparser');
      var request = require('request');
      var req = request(url);
      req.setHeader('user-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36');
      req.setHeader('accept', 'text/html,application/xhtml+xml');
      var feedparser = new FeedParser();
      req.on('error', function (error) {
      });
      req.on('response', function (res) {
        var stream = this;
        if (res.statusCode !== 200) {
          this.emit('error', new Error('Bad status code'));
        }
        else {
          stream.pipe(feedparser);
        }
      });
      feedparser.on('error', function (error) {
        console.log("Error fetching RSS");
      });
      feedparser.on('readable', function () {
        var stream = this;
        var meta = this.meta;
        var item;
        while (item = stream.read()) {
        }
      });
      feedparser.on('data', function(article) {
        arr.push(article);
      });
      feedparser.on('end', function() {
        for (i=0;i<arr.length;i++) {
          try {
            var text = arr[i].title;
          } catch (err) {
            var text = 'Empty'
          }
          try {
            var author = arr[i].author;
          } catch (err) {
            var author = 'Empty'
          }
          try {
            var link = arr[i].link;
          } catch (err) {
            var link = 'Empty'
          }
          try {
            var date = arr[i].date;
          } catch (err) {
            var date = new Date();
          }
          if (date == null) {
            date = new Date()
          }
          var id = link;
          id =  id.replace(/ /, '');
          date = date.toISOString().replace(/T/, '').replace(/\..+/, '');
          var query = { _id: id, 'source': name,'text':text, 'author':author, 'link':link , 'date':date, 'read':0}
          insertRss(query);
        }
      });
    },12000)
  }

  function insertRss(query) {
   setTimeout(function(){
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect('mongodb://localhost:27017/teleirc', function(err, db) {
      var collection = db.collection('rss');
      collection.ensureIndex({_id:1} , {unique: true});
      collection.insert(query)
      db.close();
    });
  },4000)

  }


  function addRss(url, name) {
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect('mongodb://localhost:27017/teleirc', function(err, db) {
      var collection = db.collection('rssurl');
      collection.ensureIndex({name:name, url:url} , {unique: true});
      query = { name:name, url: url}
      collection.insert(query)
      db.close();
    });
  }
  exports.loadRss = function() {
    loadRss();
  }

  function loadRss() {
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect('mongodb://localhost:27017/teleirc', function(err, db) {
      var collection = db.collection('rssurl');
      collection.find({}).toArray(function(err, elem) {
        if (err) {
          console.log(err)
          return
        }
        global.arrayRssUrl = []
        for (var i = 0;i<elem.length;i++) {
          console.log(elem[i].name+" "+elem[i].url);
          global.arrayRssUrl.push([elem[i].name, elem[i].url]);
        }
        db.close();
      });
    });
  }
  var getjson = function loadDataAndParseJSON(url, callback) {
    var http = require('http');
    http.get(url, function(res){
      var body = '';

      res.on('data', function(chunk){
        body += chunk;
      });

      res.on('end', function(){
        try {
          var datajson = JSON.parse(body);
          return callback(null, datajson);
        } catch (err) {
          return callback(null, null);
        }

      });
    }).on('error', function(e){
      console.log("Got an error: ", e);
    });


    nodeIrc.say(chanName, '!rss <on|off|add|load> <-|-|url name|->');
*/
}

module.exports = Rss;
