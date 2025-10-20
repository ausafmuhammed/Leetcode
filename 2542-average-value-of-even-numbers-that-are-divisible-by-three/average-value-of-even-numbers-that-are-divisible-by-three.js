/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
    let count = 0;
    let sum = 0;
    for (let i of nums) {
        if (i % 6 === 0) {
            sum += i
            count++; 
        }
    }
    return count === 0 ? 0 : Math.floor(sum / count);
};