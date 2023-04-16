const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = Infinity;
  const number = n.toString().split('').map(Number);
  for(let i = 0; i < number.length; i++) {
    let newNumber = parseInt(number.filter((_, index) => index !== i).join(''));
    if (newNumber > maxNumber) {
      maxNumber = newNumber;
    }
    return newNumber;
  }  
}

module.exports = {
  deleteDigit
};
