class Math {
  constructor(ircMsg, tgMsg, ircConfig, isEnabled) {
    this.name = 'math';
    this._ircMsg = ircMsg;
    this._tgMsg = tgMsg;
    this.Enabled = isEnabled;
  }

  Exec(userMessage, username, isMaster, ircMsg, tgMsg) {
    var math = require('mathjs'), res;
    try {
      res = math.evaluate(userMessage.substr(5));
      this._ircMsg(res);
      this._tgMsg(res);
    } catch (err) {
      console.log(err);
    }
  }

  Help() {
    var helpTxt = "!" + this.name + " <math or logic expression>";
    this._ircMsg(helpTxt);
    this._tgMsg(helpTxt);
  }
}

module.exports = Math;
