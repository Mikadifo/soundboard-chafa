require("dotenv").config();
const { REST, Routes } = require("discord.js");
const { token, clientId, guildId } = process.env;

const commands = [
  {
    name: "sounds",
    description: "Lists all sounds",
  },
  {
    name: "hey",
    description: "Hola",
  },
];

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

module.exports = { main };
