/**
 * @function checkLogin
 * @description checking the login for lowercase
 * @param {string} login
 * @returns {string} 
 */

const checkLogin = (login) => {
  return login === login.toLowerCase() ? true : false ;
};

console.log(checkLogin('star'));
