import fs from "fs";
import { URL } from "url";

const SOUNDS_URL = new URL("./../data/sounds.json", import.meta.url);

const readSounds = () => {
  const sounds = fs.readFileSync(SOUNDS_URL);
  return JSON.parse(sounds);
};

export const getSoundsAsChoices = () => {
  return readSounds().map(({ id, name }) => ({ name, value: id }));
};

export const getSoundURLbyId = (soundId) => {
  return readSounds().filter(({ id }) => id === soundId)[0].url;
};

export const soundIdExists = (soundId) => {
  return readSounds().filter(({ id }) => id === soundId).length > 0;
};

export const addSound = (sound) => {
  const sounds = readSounds();
  sounds.push(sound);

  fs.writeFileSync(SOUNDS_URL, JSON.stringify(sounds));
};
