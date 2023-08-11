import dotenv from "dotenv";
import { Client, IntentsBitField } from "discord.js";
import main from "./register-commands.js";

dotenv.config();
const { token } = process.env;

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online`);
});

main();

client.login(token);
