/**
 * Описание функции по методу объявления function decloration
 * @param {number} par1 - первый параметр 
 * @param {number} par2 - второй параметр
 * @returns {number} - тип данных возращаемых функцией
 */

function declorationFunc(par1, par2) {};

// функция становится методом глобального объекта window
// при объявлении функции по методу fuction decloration, функцию можно вызывать до ее объвления

/**
 * Описание функции по методу объявления function expression
 * @param {number} par1 - первый параметр 
 * @param {number} par2 - второй параметр
 * @returns {number} - тип данных возращаемых функцией
 */

const expressionFunc = function(par1, par2) {};

// Можно вызывать фуекцию только после ее определения

/**
 * Описание стрелочной функции (лямбда функция).
 * @param {number} par1 - первый параметр 
 * @param {number} par2 - второй параметр
 * @returns {number} - тип данных возращаемых функцией
 */

const arrowFunc = () => {};
