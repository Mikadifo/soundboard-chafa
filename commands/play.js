import {
  createAudioPlayer,
  createAudioResource,
  getVoiceConnection,
} from "@discordjs/voice";
import { SlashCommandBuilder } from "discord.js";
import { getSoundsAsChoices, getSoundURLbyId } from "../utils/sounds.js";
import ytdl from "ytdl-core-discord";

const playCommand = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("Play a sound effect.")
    .addStringOption((option) =>
      option
        .setName("sound")
        .setDescription("A sound to be played")
        .setRequired(true)
        .addChoices(...getSoundsAsChoices())
    ),
  async execute(interaction) {
    const connection = getVoiceConnection(interaction.guildId);
    if (!connection) return await interaction.reply("I'm not in any channel");

    const sound = interaction.options.getString("sound");
    const audioPlayer = createAudioPlayer();
    const stream = await ytdl(getSoundURLbyId(sound), { filter: "audioonly" });
    connection.subscribe(audioPlayer);

    audioPlayer.play(createAudioResource(stream));

    await interaction.reply(`Playing ${sound}!`);
  },
};

export default playCommand;
