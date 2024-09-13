/**
 * @function
 * @description возвращает строку с заглавной буквы
 * @param {string} name
 * @returns {string}
 */

const capitalizeFirstLetter = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(capitalizeFirstLetter('nikitos'));
