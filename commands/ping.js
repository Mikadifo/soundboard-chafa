import { SlashCommandBuilder } from "discord.js";

const pingCommand = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Tests if the bot is working.");

export default pingCommand.toJSON();
