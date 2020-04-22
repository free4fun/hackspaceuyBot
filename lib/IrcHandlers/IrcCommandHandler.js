const Helpers = require("../Helpers.js");
const Commands = require('../../Commands/');
/**
* Handles the event when a user sends a message to the IRC channel.
*/
class IrcCommandHandler {

  // ---------------- Constructor ----------------

  /**

  * @param {Function} ircMsg - The IRC Bot function (needed to send messages).
  * @param {Function} tgMsg - The Telegram Bot function queueTelegramMessage
  * @param {*} ircConfig - The bot's IRC Configuration.
  * @param {boolean} enabled - Is this handler enabled?
  */
  constructor(ircMsg, tgMsg, ircConfig, enabled) {
    this._ircMsg = ircMsg;
    this._tgMsg = tgMsg;
    this._ircConfig = ircConfig;
    this.Enabled = enabled;
    this.Cmds = [];
    for(var cmd in Commands) {
      this.Cmds.push(new Commands[cmd](this._ircMsg, this._tgMsg, this._ircConfig, true));
    }
  }

  // ---------------- Functions ----------------

  /**
  * Check if the command exists
  * @param {string} username - The user who sent the message.
  * @param {string} channel - The channel the user has sent the message in.
  * @param {string} userMessage - The message the user sent.
  */
  GetCommand(username, channel, userMessage) {
    if (this.Enabled === false) {
      return;
    }
    var blackListed = Helpers.StringExistsIgnoreCase(this._ircConfig.BlackList, username);
    if (blackListed === false) {
      var isMaster = this.IsMaster(username);
      if (channel.toLowerCase() === this._ircConfig.botName.toLowerCase()) {
        if(!isMaster) {
          this.Identify(username, userMessage.substr(1));
        }
        return;
      }
      if (channel.toLowerCase() === this._ircConfig.channel.toLowerCase()) {
        if (userMessage.match(/^\!.+$/)) this.RunCommand(userMessage.substr(1), username, isMaster);
        if (userMessage.match(/(.*?)( ?:?\+1|.+?\+\+)$/)) this.RunCommand(userMessage, username, isMaster, 'MoreKarma');
        if (userMessage.match(/(.*?)( ?:?\-1|.+?\-\-)$/)) this.RunCommand(userMessage, username, isMaster, 'LessKarma');
        if (userMessage.match(/^\/.*\/.*?$/)) this.RunCommand(userMessage, username, isMaster);
        Helpers.MongoDBUpdateOne('log', username, userMessage);
        return;
      }
    }
    return;
  }

  RunCommand(userMessage, username, isMaster, fc) {
    var cmd = userMessage.split(' ')[0];
    var aliasIndex = undefined;
    var karmaIndex = undefined;
    var sedIndex = undefined;
    for (var i in this.Cmds) {
      if (this.Cmds[i].name === 'alias') aliasIndex = i;
      if (this.Cmds[i].name === 'karma') karmaIndex = i;
      if (this.Cmds[i].name === 'sed') sedIndex = i;
      if (this.Cmds[i].name === cmd) {
        this.Cmds[i].Exec(userMessage, username, isMaster, this._ircMsg, this._tgMsg);
        return;
      }
    }
    if (aliasIndex != undefined) this.Cmds[aliasIndex].GetAlias(userMessage, this._ircMsg, this._tgMsg);
    if (sedIndex != undefined) this.Cmds[sedIndex].Exec(userMessage, username, isMaster, this._ircMsg, this._tgMsg);
    if (fc != undefined) if (karmaIndex != undefined) this.Cmds[karmaIndex][fc](userMessage);
  }

  IsMaster(username) {
    return Helpers.StringExistsIgnoreCase(this._ircConfig.MasterList, username.toLowerCase());
  }

  AddMaster(username) {
    return Helpers.Add(this._ircConfig.MasterList, username.toLowerCase());
  }

  RemoveMaster(username) {
    return Helpers.Remove(this._ircConfig.MasterList, username.toLowerCase());
  }

  Identify(username, userMessage) {
    var re = new RegExp ('^identify\\ '+ this._ircConfig.MasterPass + '$');
    if (userMessage.match(re)) {
      if (! this.IsMaster(username)) {
        this.AddMaster(username);
      }
      this._ircMsg(username+" identified.");
      this._tgMsg(username+" identified.");
    }
    return;
  }

  UserChangedNick(oldNick, newNick) {
    if (this.IsMaster(oldNick)) {
      this.RemoveMaster(oldNick);
      this.AddMaster(newNick);
    }
  }

  UserHasPart(channel, username) {
    if (this.IsMaster(username)) {
      this.RemoveMaster(username);
    }
  }

  UserHasQuit(username) {
    if (this.IsMaster(username)) {
      this.RemoveMaster(username);
    }
  }

}

module.exports = IrcCommandHandler;
