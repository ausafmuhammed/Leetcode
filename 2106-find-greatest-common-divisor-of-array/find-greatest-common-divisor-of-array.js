/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
     let min = Infinity;
    let max = -Infinity;
    for (let n of nums) {
        if (n < min) min = n;
        if (n > max) max = n;
    }
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    return gcd(min, max);
};