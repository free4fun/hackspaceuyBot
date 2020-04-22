class Convertions {
  constructor(ircMsg, tgMsg, ircConfig, isEnabled) {
    this.name = 'convert';
    this._ircMsg = ircMsg;
    this._tgMsg = tgMsg;
    this.Enabled = isEnabled;
  }

  Exec(userMessage, username, isMaster) {
    var str = userMessage.replace(this.name + ' ', '');
    if (str != "" && str != undefined) {
      var s = str.split(' ');
      if (s.length == 3) {
        if (s[0].match(/(hex|dec|oct|bin)/) && s[1].match(/(hex|dec|oct|bin)/) && s[2].match(/[0-9a-fA-F]+/)) {
          var convert = require('all-your-base');
          var values = {'hex': 16, 'dec' : 10, 'oct' : 8, 'bin' : 2 }
          var from = s[0];
          var to = s[1];
          var result = convert.parseInt(s[2], values[from], values[to]);
          if (result != "") {
            this._ircMsg(result);
            this._tgMsg(result);
          }
        }
      }
    }
  }

  Help() {
    var helpTxt = "!" + this.name + " <hex|dec|oct|bin> <hex|dec|oct|bin> <number>";
    this._ircMsg(helpTxt);
    this._tgMsg(helpTxt);
  }
}
module.exports = Convertions;
