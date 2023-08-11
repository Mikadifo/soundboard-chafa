import { SlashCommandBuilder } from "discord.js";
import { addSound, soundIdExists } from "../utils/sounds.js";

const addCommand = {
  data: new SlashCommandBuilder()
    .setName("add")
    .setDescription("Add a sound effect.")
    .addStringOption((option) =>
      option
        .setName("name")
        .setDescription("A short name for the sound")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("url")
        .setDescription("The youtube URL for the sound")
        .setRequired(true)
    ),
  async execute(interaction) {
    const name = interaction.options.getString("name");
    const id = name.toLowerCase().replaceAll(/\s/g, "_");

    const url = interaction.options.getString("url");
    if (soundIdExists(id)) {
      return await interaction.reply(
        `There is a sound with the name \`${name}\` already. Sound not added!`
      );
    }

    addSound({ id, name, url });
    await interaction.reply(`${name} added! Don't forget to restart the bot.`);
  },
};

export default addCommand;
