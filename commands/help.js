import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import commands from "./index.js";

const embed = new EmbedBuilder().setColor("#000000").setTitle("Commands");

const helpCommand = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Provides information about the bot commands."),
  async execute(interaction) {
    await interaction.reply({
      embeds: [
        embed.setDescription(`
    ${commands.map((c) => "* " + c.data.name).join("\n")}
	`),
      ],
    });
  },
};

export default helpCommand;
