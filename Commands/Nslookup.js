class Nslookup {
  constructor(ircMsg, tgMsg, ircConfig, isEnabled) {
    this.name = 'nslookup';
    this._ircMsg = ircMsg;
    this._tgMsg = tgMsg;
    this.Enabled = isEnabled;
  }

  Exec(userMessage, username, isMaster, ircMsg, tgMsg) {
    if (isMaster) {
      var str = userMessage.replace(this.name + ' ', '');
      if (str != "") {
        var sys = require('util')
        var exec = require('child_process').exec;
        exec("nslookup "+str, function(error, stdout, stderr) {
          ircMsg(stdout);
          tgMsg(stdout)

        });
      }
    }
  }

  Help() {
    var helpTxt = "!" + this.name + " <IP or domain>";
    this._ircMsg(helpTxt);
    this._tgMsg(helpTxt);
  }
}

module.exports = Nslookup;
