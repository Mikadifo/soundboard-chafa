import {
  createAudioPlayer,
  createAudioResource,
  getVoiceConnection,
} from "@discordjs/voice";
import fs from "fs";
import { URL } from "url";
import ytdl from "ytdl-core-discord";

const SOUNDS_URL = new URL("./../data/sounds.json", import.meta.url);

export const getSounds = () => {
  const sounds = fs.readFileSync(SOUNDS_URL);
  return JSON.parse(sounds);
};

export const getSoundURLbyId = (soundId) => {
  return getSounds().filter(({ id }) => id === soundId)[0].url;
};

export const soundIdExists = (soundId) => {
  return getSounds().filter(({ id }) => id === soundId).length > 0;
};

export const addSound = (sound) => {
  const sounds = getSounds();
  sounds.push(sound);

  fs.writeFileSync(SOUNDS_URL, JSON.stringify(sounds));
};

export const playSound = async (sound, guildId) => {
  const connection = getVoiceConnection(guildId);
  if (!connection)
    return { success: true, errorMessage: "I'm not in any channel" };

  const audioPlayer = createAudioPlayer();
  const stream = await ytdl(getSoundURLbyId(sound), { filter: "audioonly" });
  connection.subscribe(audioPlayer);

  audioPlayer.play(createAudioResource(stream));
};
