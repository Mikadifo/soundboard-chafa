import dotenv from "dotenv";
import { REST, Routes } from "discord.js";
import helpCommand from "./commands/help.js";
import pingCommand from "./commands/ping.js";

dotenv.config();
const { token, clientId, guildId } = process.env;

const commands = [helpCommand, pingCommand];

const rest = new REST({ version: "10" }).setToken(token);

const main = async () => {
  try {
    console.log("Registering slash commands...");

    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: commands,
    });

    console.log("Slash commands registered");
  } catch (error) {
    console.log("There was an error: ", error);
  }
};

export default main;
