import fs from "fs";
import { URL } from "url";

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
