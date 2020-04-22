const Helpers = require("../lib/Helpers.js");

class Alias {
  constructor(ircMsg, tgMsg, ircConfig, isEnabled) {
    this.name = 'alias';
    this._ircMsg = ircMsg;
    this._tgMsg = tgMsg;
    this.Enabled = isEnabled;
  }

  Exec(userMessage, username, isMaster, ircMsg, tgMsg) {
    var str = userMessage.replace(this.name + ' ', '');
    if (str != "") {
      var s = str.split(' ');
      if (s[0] != undefined && s[0] != "") {
        if (isMaster) {
          if (s[1] != undefined && s[1] != "") {
            if (s[0] === 'del') {
              Helpers.MongoDBRemoveOne('alias', str.replace('del ','')).then(function(result) {
                var resp = "Oops!"
                if (result['result']['ok'] === 1) var resp = "Remove OK!";
                ircMsg(resp);
                tgMsg(resp);
              }, function(err) {
                console.error('An error ocurred', err, err.stack);
              });
            } else if (s[0] === 'add') {
              Helpers.MongoDBUpdateOne('alias', s[1], str.replace('add ' + s[1] + ' ','')).then(function(result) {
                var msg = "Oops!";
                if (result['result']['ok'] === 1) msg = "Alias add OK!";
                ircMsg(msg);
                tgMsg(msg);
              }, function(err) {
                console.error('An error ocurred', err, err.stack);
              });
            }
          }
        }
        if (s[0] === 'list') {
          Helpers.MongoDBFindInCollection('alias').then(function(items) {
            var msg = "Alias list is empty...";
            if (items.length > 0) {
              msg = '';
              for (var i = 0 ; i < items.length; i++) {
                msg += ", " + Object.keys(items[i])[1];
              }
              msg = msg.substr(2);
            }
            ircMsg(msg);
            tgMsg(msg);
          }, function(err) {
            console.error('An error ocurred', err, err.stack);
          });
        }
      }
    }
  }
  GetAlias(userMessage, ircMsg, tgMsg) {
    Helpers.MongoDBFindInCollection('alias', userMessage).then(function(items) {
      if (items.length > 0) {
        var resp = items[0][userMessage];
        ircMsg(resp);
        tgMsg(resp);
      }
    }, function(err) {
      console.error('An error ocurred', err, err.stack);
    });
  }

  Help() {
    var helpTxt = "!" + this.name + " [del/add] text";
    this._ircMsg(helpTxt);
    this._tgMsg(helpTxt);
  }
}

module.exports = Alias;
