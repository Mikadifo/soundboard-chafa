import { ChannelType, SlashCommandBuilder } from "discord.js";
import { joinVoiceChannel } from "@discordjs/voice";

const joinCommand = {
  data: new SlashCommandBuilder()
    .setName("join")
    .setDescription("I'll join to your channel.")
    .addChannelOption((option) =>
      option
        .setName("channel")
        .setDescription("Choose a channel")
        .setRequired(true)
        .addChannelTypes(ChannelType.GuildVoice)
    ),
  async execute(interaction) {
    const voiceChannel = interaction.options.getChannel("channel");

    joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: interaction.guildId,
      adapterCreator: interaction.guild.voiceAdapterCreator,
    });

    await interaction.reply("Wenassss!");
  },
};

export default joinCommand;
