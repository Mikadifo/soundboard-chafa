import { SlashCommandBuilder } from "discord.js";
import { getVoiceConnection } from "@discordjs/voice";

const leaveCommand = {
  data: new SlashCommandBuilder()
    .setName("leave")
    .setDescription("Kick me out of your channel."),
  async execute(interaction) {
    const connection = getVoiceConnection(interaction.guildId);
    if (!connection) return await interaction.reply("I'm not in a channel");

    connection.destroy();
    await interaction.reply("Adioooo!");
  },
};

export default leaveCommand;
