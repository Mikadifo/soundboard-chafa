import addCommand from "./addSound.js";
import boardCommand from "./board.js";
import helpCommand from "./help.js";
import joinCommand from "./join.js";
import leaveCommand from "./leave.js";
import pingCommand from "./ping.js";
import playCommand from "./play.js";

const commands = [
  helpCommand,
  pingCommand,
  joinCommand,
  leaveCommand,
  playCommand,
  addCommand,
  boardCommand,
];

export default commands;
