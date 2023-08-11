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
    const sound = interaction.options.getString("sound");
    const played = playSound(sound, interaction.guildId);

    if (!played) return await interaction.reply("I'm not in any channel");
    await interaction.reply(`Playing ${sound}!`);
  },
};

export default playCommand;
