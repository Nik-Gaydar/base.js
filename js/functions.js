// Работа с строками

/**
 * @function toCapitalize
 * @param {string} name
 * @returns {string} 
 */

const toCapitalize = (name) => {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()};

console.log(toCapitalize('nikitos'));

/**
 * @function checkEmptyString
 * @param {string} firstName
 * @returns {string} 
 */

const checkEmptyString = (firstName) => {
  if (typeof firstName !== 'string') {
    return 'Ну кого ты пытаешься надуть?'
  }
  if (firstName.trim() === "") {
    return 'Да натыкай ты уже какие нибудь буквы!'
  }
};

console.log(checkEmptyString('  '));

// Работа с булевым значением

/**
 * @function isEqualNumber
 * @param {number} num1
 * @param {number} num2
 * @returns {boolean}
 */

const isEqualNumber = function(num1, num2) {
  return ( num1 === num2 ? true : false )
};

console.log(isEqualNumber(2, 3));

/**
 * @function checkSumTen
 * @param {number} num1
 * @param {number} num2
 * @returns {boolean}
 */

const checkSumTen = (num1, num2) => {
  return ( num1 + num2 > 10 ? true : false )
};

console.log(checkSumTen(8, 4));

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
    throw new Error('Что то здесь не так..');
  }
  return `Разыскивается: ${user.name}, Возраст: ${user.age}`;
};

const user = {
  name: 'Дохлый Пит',
  age: 75,
}
console.log(generateObjectToString(user));

// Работа с массивом объектов

/**
 * @typedef {object} User
 * @property {string} Name
 * @property {number} Age
 */

/**
 * @typedef {object} FoundUser
 * @property {string} Name
 * @property {number} Age
 */

/**
 * @function foundUser
 * @param {User} user
 * @returns {FoundUser} foundUser
 */

const users = [
  { name: 'Дохлый Пит', age: 75 },
  { name: 'Мрачный Джон', age: 40 },
  { name: 'Весёлый Гарри', age: 30 },
];

const foundUser = (users) => {
  return users.name === 'Дохлый Пит';
};

const findPit = users.find(foundUser);

console.log(findPit);
