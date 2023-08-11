import { SlashCommandBuilder } from "discord.js";

const helpCommand = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Provides information about the bot commands."),
  async execute(interaction) {
    await interaction.reply("Hey man");
  },
};

export default helpCommand;
