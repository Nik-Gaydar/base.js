// // Работа с строками

// /**
//  * @function capitalizeFirstLetter
//  * @param {string} name
//  * @returns {string} Строка с заглавной буквы
//  */

// const capitalizeFirstLetter = (name) => {
//   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// };

// console.log(capitalizeFirstLetter('nikitos'));

// /**
//  * @function checkEmptyString
//  * @param {string} firstName
//  * @returns {string} 
//  */

// const checkEmptyString = (firstName) => {
//   if (typeof firstName !== "string") {
//     return "Ну кого ты пытаешься надуть?"
//   }
//   if (firstName.trim() === "") {
//     return "Да натыкай ты уже какие нибудь буквы!"
//   }
// };

// console.log(checkEmptyString('  '));

// Работа с булевыми значениями

// /**
//  * @function isEqualNumber
//  * @param {number} num1
//  * @param {number} num2
//  * @returns {boolean}
//  */

// const isEqualNumber = function(num1, num2) {
//   if (num1 === num2) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isEqualNumber(2, 2));

// /**
//  * @function checkSumTen
//  * @param {number} num1
//  * @param {number} num2
//  * @returns {boolean}
//  */

// const checkSumTen = (num1, num2) => {
//   if (num1 + num2 > 10) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkSumTen(8, 4));

// Работа с объектом

/**
 * @function generateObjectToString
 * @param {object} user
 * @param {string} user.name
 * @param {number} user.age
 * @returns {string}
 */

const generateObjectToString = function(user) {
  if (
    typeof user !== 'object' || user === null) {
    throw new Error("Что то здесь не так..");
  }
  return "Разыскивается: " user.name + user.age
};

const user = {
  name: 'Дохлый Пит',
  age: 75,
}
console.log(generateObjectToString(user));
