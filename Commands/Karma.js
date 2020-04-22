const Helpers = require("../lib/Helpers.js");

class Karma {
  constructor(ircMsg, tgMsg, ircConfig, isEnabled) {
    this.name = 'karma';
    this._ircMsg = ircMsg;
    this._tgMsg = tgMsg;
    this.Enabled = isEnabled;
  }

  Exec(userMessage, username, isMaster, ircMsg, tgMsg) {
    var str = userMessage.replace(this.name + ' ', '');
    if (str != "") {
      Helpers.MongoDBFindInCollection('karma', str).then(function(items) {
        if (items.length > 0) {
          var resp = items[0][str];
          ircMsg(resp);
          tgMsg(resp);
        }
      }, function(err) {
        console.error('An error ocurred', err, err.stack);
      });
    }
  }

  MoreKarma(userMessage) {
    var word = userMessage.replace(/ ?:?\+1$|\+\+$/g, '');
    Helpers.MongoDBIncOne('karma', word);
  }

  LessKarma(userMessage) {
    var word = userMessage.replace(/ ?:?\-1$|\-\-$/g, '');
    Helpers.MongoDBDecOne('karma', word);
  }

  Help() {
    var helpTxt = "!" + this.name + "<text>";
    this._ircMsg(helpTxt);
    this._tgMsg(helpTxt);
  }
}
module.exports = Karma;
