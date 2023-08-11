import dotenv from "dotenv";
import { Collection, REST, Routes } from "discord.js";
import commands from "./commands/index.js";

dotenv.config();
const { token, clientId, guildId } = process.env;

const rest = new REST({ version: "10" }).setToken(token);

const main = async (client) => {
  client.commandArray = [];
  client.commands = new Collection();
  commands.forEach((command) => {
    client.commands.set(command.data.name, command);
    client.commandArray.push(command.data.toJSON());
  });

  try {
    console.log("Registering slash commands...");

    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: client.commandArray,
    });

    console.log("Slash commands registered");

    client.login(token);
  } catch (error) {
    console.log("There was an error: ", error);
  }
};

export default main;
