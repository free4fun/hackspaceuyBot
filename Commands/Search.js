const Helpers = require("../lib/Helpers.js");

class Search {
  constructor(ircMsg, tgMsg, ircConfig, isEnabled) {
    this.name = 'search';
    this._ircMsg = ircMsg;
    this._tgMsg = tgMsg;
    this.Enabled = isEnabled;
  }

  async Exec(userMessage, username, isMaster) {
    var str = userMessage.replace(this.name + ' ', '');
    if (str != "") {
      var ddg = require('node-duckduckgo');
      try {
        const result = await ddg.duckIt(str, { noHtml: true, parentalFilter: 'Moderate', skipDisambig : true });
        var resp = undefined;
        if (result.data.Abstract != undefined && result.data.Abstract != "") resp = result.data.Abstract;
        else if(result.data.Answer != undefined && result.data.Answer != "") resp = result.data.Answer;
        else if(result.data.RelatedTopics[0] != undefined && result.data.RelatedTopics[0] != "") resp = result.data.RelatedTopics[0].Text;
        if (resp != undefined) {
          this._ircMsg(resp);
          this._tgMsg(resp);
        }
        else {
          this._ircMsg("No results found.");
          this._tgMsg("No results found.");
        }
      }
      catch (err) {
        console.error('Error:', err);
      }
    }
  }

  Help() {
    var helpTxt = "!" + this.name + " <text>";
    this._ircMsg(helpTxt);
    this._tgMsg(helpTxt);
  }
}

module.exports = Search;
