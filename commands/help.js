import { SlashCommandBuilder } from "discord.js";

const helpCommand = new SlashCommandBuilder()
  .setName("help")
  .setDescription("Provides information about the bot commands.");

export default helpCommand.toJSON();
