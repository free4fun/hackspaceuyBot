class Say {
  constructor(ircMsg, tgMsg, ircConfig, isEnabled) {
    this.name = 'say';
    this._ircMsg = ircMsg;
    this._tgMsg = tgMsg;
    this.Enabled = isEnabled;
  }

  Exec(text) {
    var s = text.replace('!' + this.name + ' ', '');
    if (s != undefined) {
      this._ircMsg(s);
      this._tgMsg(s);
    }
  }

  Help() {
    var helpTxt = "!" + this.name + " [text]";
    this._ircMsg(helpTxt);
    this._tgMsg(helpTxt);
  }
}

module.exports = Say;
