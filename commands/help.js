const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Provides information about the bot commands."),
  async execute(interaction) {
    await interaction.reply("These are the available commands:");
  },
};
