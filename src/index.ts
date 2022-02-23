export const emojis: string[] = ["🥵", "💩", "🚵🏻‍♂️", "🚶🏼", "🍱", "🥟"];


const shuffledArray = (arr: string[]) => arr.sort(() => 0.5 - Math.random());

/**
 * Generate a random UUID composed of emojis 
 * @returns UUID string
 */
export const uuid = (): string => shuffledArray(emojis).join("");
