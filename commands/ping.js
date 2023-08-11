import { SlashCommandBuilder } from "discord.js";

const pingCommand = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Tests if the bot is working."),
  async execute(interaction) {
    await interaction.reply("Pong!");
  },
};

export default pingCommand;
