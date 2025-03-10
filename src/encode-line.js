const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let el = 1;    
    let result = '';
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i+1]){
            el += 1;
        } else {
            result += el+str[i];
            el = 1;
        }
    }
    return result.replace(/1/g, '');
}

module.exports = {
  encodeLine
};
