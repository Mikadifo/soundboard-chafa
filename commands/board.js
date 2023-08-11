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

    const response = await interaction.reply({
      content: `Displaying a total of ${sounds.length} sounds.`,
      components: [row],
    });
    const collectorFilter = (i) => i.user.id === interaction.user.id;

    try {
      const confirmation = await response.awaitMessageComponent({
        filter: collectorFilter,
        time: 300_000,
      });

      const pressedButton = sounds.filter(
        ({ id }) => id === confirmation.customId
      )[0];

      if (pressedButton) {
        await confirmation.update({
          content: `Displaying a total of ${
            sounds.length
          } sounds.\n\`${"xyz"}\` played!`,
          components: [row],
        });
      }
    } catch (error) {
      await interaction.editReply({
        content: "Confirmation not received within 5 minute, cancelling",
        components: [],
      });
    }
  },
};

export default boardCommand;
