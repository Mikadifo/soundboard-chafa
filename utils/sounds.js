import fs from "fs";
import { URL } from "url";

const readSounds = () => {
  const sounds = fs.readFileSync(
    new URL("./../data/sounds.json", import.meta.url)
  );
  return JSON.parse(sounds);
};

export const getSoundsAsChoices = () => {
  return readSounds().map(({ id, name }) => ({ name, value: id }));
};

export const getSoundURLbyId = (soundId) => {
  return readSounds().filter(({ id }) => id === soundId)[0].URL;
};
