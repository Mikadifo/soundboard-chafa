import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  SlashCommandBuilder,
} from "discord.js";
import { getSounds } from "../utils/sounds.js";
const boardCommand = {
  data: new SlashCommandBuilder()
    .setName("board")
    .setDescription("Show a soundboard with all your sounds."),
  async execute(interaction) {
    const sounds = getSounds().map(({ id, name }) => ({ id, name }));
    const row = new ActionRowBuilder();

    sounds.forEach((sound) => {
      const button = new ButtonBuilder()
        .setCustomId(sound.id)
        .setLabel(sound.name)
        .setStyle(ButtonStyle.Primary);

      row.addComponents(button);
    });

    await interaction.reply({
      content: `Displaying a total of ${sounds.length} sounds.`,
      components: [row],
    });
  },
};

export default boardCommand;
