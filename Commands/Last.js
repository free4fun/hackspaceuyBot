const Helpers = require("../lib/Helpers.js");

class Last {
  constructor(ircMsg, tgMsg, ircConfig, isEnabled) {
    this.name = 'last';
    this._ircMsg = ircMsg;
    this._tgMsg = tgMsg;
    this.Enabled = isEnabled;
  }

  Exec(userMessage, username, isMaster, ircMsg, tgMsg) {
    var str = userMessage.replace(this.name + ' ', '');
    if (str != "") {
      Helpers.MongoDBFindInCollection('log', str).then(function(items) {
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

  Help() {
    var helpTxt = "!" + this.name + " <nick>";
    this._ircMsg(helpTxt);
    this._tgMsg(helpTxt);
  }
}
module.exports = Last;
