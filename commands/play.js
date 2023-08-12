import { SlashCommandBuilder } from "discord.js";
import { getSounds, playSound } from "../utils/sounds.js";

const playCommand = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("Play a sound effect.")
    .addStringOption((option) =>
      option
        .setName("sound")
        .setDescription("A sound to be played")
        .setRequired(true)
        .addChoices(...getSounds().map(({ id, name }) => ({ name, value: id })))
    ),
  async execute(interaction) {
    const soundId = interaction.options.getString("sound");
    await interaction.deferReply();

    const { success, errorMessage } = await playSound(
      soundId,
      interaction.guildId
    );

    if (!success) return await interaction.editReply(errorMessage);
    await interaction.editReply(`Playing ${soundId}!`);
  },
};

export default playCommand;
