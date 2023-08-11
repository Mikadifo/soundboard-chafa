import { SlashCommandBuilder } from "discord.js";
import { addSound } from "../utils/sounds.js";

//TODO: auto generate ID

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
        .setName("id")
        .setDescription("A unique id for the sound")
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
    const id = interaction.options.getString("id");
    const url = interaction.options.getString("url");

    addSound({ id, name, url });

    await interaction.reply(`${name} added!`);
  },
};

export default addCommand;