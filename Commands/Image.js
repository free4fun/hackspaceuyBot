const Helpers = require("../lib/Helpers.js");

class Image {
	constructor(ircMsg, tgMsg, ircConfig, isEnabled) {
		this.name = 'image';
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
				if (result.data.Image != undefined && result.data.Image != "") {
					this._ircMsg(result.data.Image);
					this._tgMsg(result.data.Image);
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

module.exports = Image;
