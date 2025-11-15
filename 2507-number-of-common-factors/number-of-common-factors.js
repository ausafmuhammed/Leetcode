/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    count = 1;
    for(i = 2; i <=1000; i++ ){
        a % i == 0 && b % i == 0 ? count++ : null;
    }
    return count;
};