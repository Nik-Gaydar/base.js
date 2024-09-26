/**
 * @function getQuarter
 * @param {number} month Month number
 * @returns {number} Month quarter
 */

export const getQuarter = (month) => {
  if (month <= 3) {
    return 1;
  } else if (month <=6) {
    return 2;
  } else if (month <=9) {
    return 3;
  } else if (month <=12) {
    return 4;
  } else {
    return -1;
  }
};

console.log(getQuarter(10));
