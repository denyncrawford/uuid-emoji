"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = exports.emojis = void 0;
exports.emojis = ["🥵", "💩", "🚵🏻‍♂️", "🚶🏼", "🍱", "🥟"];
const shuffledArray = (arr) => arr.sort(() => 0.5 - Math.random());
/**
 * Generate a random UUID composed of emojis
 * @returns UUID string
 */
const uuid = () => shuffledArray(exports.emojis).join("");
exports.uuid = uuid;
