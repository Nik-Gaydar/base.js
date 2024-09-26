/**
 * @function reverseString
 * @param {string} str The string to be reversed.
 * @returns {string} The reversed string.
 */

export const reverseString = (str) => { return [...str].reverse().join('') };
