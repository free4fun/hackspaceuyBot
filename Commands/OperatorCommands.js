//FIXME

class OpCommands {
  constructor(ircMsg, tgMsg, ircConfig, isEnabled) {
    this.name = 'oper';
    this._ircMsg = ircMsg;
    this._tgMsg = tgMsg;
    this.Enabled = isEnabled;
  }

  Exec(userMessage, username, isMaster, ircMsg, tgMsg) {
    if (isMaster) {
      var str = userMessage.replace(this.name + ' ', '');
      if (str != "") {
        var line = str.split(' ');
        switch (line[0]) {
          case 'op':
          if (line[1] != undefined) {
            nodeIrc.send("MODE", chanName, '+o', line[1]);
          } else {
            nodeIrc.send("MODE", chanName, '+o', user);
          }
        }
        break;

        case 'deop':
        if (hasAuth(user, nodeIrc)) {
          if (line[1] != undefined) {
            nodeIrc.send("MODE", chanName, '-o', line[1]);
          } else {
            nodeIrc.send("MODE", chanName, '-o', user);
          }
        }
        break;
        case 'voice':
        if (line[1] != undefined) {
          nodeIrc.send("MODE", chanName, '+v', line[1]);
        } else {
          nodeIrc.send("MODE", chanName, '+v', user);
        }
      }
      break;

      case 'devoice':
      if (line[1] != undefined) {
        nodeIrc.send("MODE", chanName, '-v', line[1]);
      } else {
        nodeIrc.send("MODE", chanName, '-v', user);
      }
    }
    break;
    case 'kick':
    if (line[1] != undefined) {
      nodeIrc.send("KICK", chanName,  line[1]);
    }
  }
  break;
  case 'ban':
  if (hasAuth(user) && line[1] != undefined) {
    nodeIrc.send("MODE", chanName, '+b', line[1]);
  }
  break;
  case 'unban':
  if (hasAuth(user) && line[1] != undefined) {
    nodeIrc.send("MODE", chanName, '-b', line[1]);
  }
  break;

  case 'nick':
  if (hasAuth(user) && line[1] != undefined) {
    nodeIrc.send("NICK",line[1]);
  }
  break;
  nodeIrc.say(chanName, '!op [opcional nick]');
  break;
  case 'deop':
  nodeIrc.say(chanName, '!deop [opcional nick]');
  break;
  case 'voice':
  nodeIrc.say(chanName, '!voice [opcional nick]');
  break;
  case 'devoice':
  nodeIrc.say(chanName, '!devoice [opcional nick]');
  break;
  case 'kick':
  nodeIrc.say(chanName, '!kick <nick>');
  break;
  case 'ban':
  nodeIrc.say(chanName, '!ban <nick!username@ip>');
  break;
  case 'unban':
  nodeIrc.say(chanName, '!unban <nick!username@ip>');
  break;
  case 'nick':
  nodeIrc.say(chanName, '!nick <nick>');

}
module.exports = OpCommands;
