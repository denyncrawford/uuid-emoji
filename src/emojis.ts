
import emojis from 'https://esm.sh/emojis-list';
import { uuidv4 } from './uuid.ts';

const alphabet = 'abcdefghijklmnopqrstuvwxyz01234567890';

type emojiMap = Record<string, string>;

export const getEmojisSliceBySeed = (seed: number): string[] => {
  const emojisLength = emojis.length;
  const emojisList = [];
  // Generate a random number between 0 and emojisLength
  for (let i = 0; i < seed; i++) {
    const randomNumber = Math.floor(Math.random() * emojisLength);
    emojisList.push(emojis[randomNumber]);
  }
  return emojisList;
};

export const generateEmojiMapFromAlphabet = (alphabet: string): emojiMap => {
  const emojiMap: emojiMap = {};
  const emojisList = getEmojisSliceBySeed(alphabet.length);
  for (let i = 0; i < alphabet.length; i++) {
    emojiMap[alphabet[i]] = emojisList[i];
  }
  return emojiMap;
}

export const getEmojiUUID = (UUID: string, map: emojiMap) => {
  let emoji = '';
  for (let i = 0; i < UUID.length; i++) {
    if (UUID[i] === '-') {
      emoji += '-';
      continue;
    }
    emoji += map[UUID[i]];
  }
  return emoji;
}

export const emojid = (): string => { 
  return getEmojiUUID(uuidv4(), generateEmojiMapFromAlphabet(alphabet));
}