/**
 * @function reversString
 * @param {string} str The string to be reversed.
 * @returns {string} The reversed string.
 * 
 * @throws {Error} If the argument is an empty string or falsy value.
 * @throws {Error} If the argument is not a string.
 *
 * @example
 * // returns 'olleh'
 * reversString('hello')
 */

export const reversString = (str) => {
  if (!str) {
    throw new Error('The argument cannot be empty!')
  }
  if (typeof str !== 'string') {
    throw new Error('You need to specify the string');
  }
  return str.split('').reverse().join('');
};
