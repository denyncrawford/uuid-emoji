import { emojis } from "./emojis";

const shuffledArray = (arr: string[]) => arr.sort(() => 0.5 - Math.random());

export const uuid = (): string => shuffledArray(emojis).join("");
