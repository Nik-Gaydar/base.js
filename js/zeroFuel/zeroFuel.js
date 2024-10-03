/**
* @function zeroFuel
* @param {number} fuelLeft
* @param {number} mpg
* @param {number} distanceToPump
* @return {boolean} 
*/

export const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump / mpg <= fuelLeft;
};
