const Helpers = require("../lib/Helpers.js");

class Sed {
  constructor(ircMsg, tgMsg, ircConfig, isEnabled) {
    this.name = 'sed';
    this._ircMsg = ircMsg;
    this._tgMsg = tgMsg;
    this.Enabled = isEnabled;
  }

  Exec(userMessage, username, isMaster, ircMsg, tgMsg) {
    console.log(userMessage);
    Helpers.MongoDBFindInCollection('log', username).then(function(items) {
      if (items.length > 0) {
        var text = items[0][username];
        var res = text.replace(userMessage);
        ircMsg(res);
        tgMsg(res);
      }
    });
  }

  Help() {
    var helpTxt = "!" + this.name+" <regex to apply to previous line>";
    this._ircMsg(helpTxt);
    this._tgMsg(helpTxt);
  }
}

module.exports = Sed;
