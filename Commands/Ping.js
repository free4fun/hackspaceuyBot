class Ping {
	constructor(ircMsg, tgMsg, ircConfig, isEnabled) {
		this.name = 'ping';
		this._ircMsg = ircMsg;
		this._tgMsg = tgMsg;
		this.Enabled = isEnabled;
	}

	Exec(userMessage, username, isMaster, ircMsg, tgMsg) {
		var resp = "pong!"
		ircMsg(resp);
		tgMsg(resp);
	}


	Help() {
		var helpTxt = "!" + this.name;
		this._ircMsg(helpTxt);
		this._tgMsg(helpTxt);
	}
}
module.exports = Ping;
