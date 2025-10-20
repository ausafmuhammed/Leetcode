/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
    let bigB = 0;
    let count = 0;
    for (let i of nums) {
        bigB += i;
        if ( bigB === 0) {
            count++;
        }
    }
    return count;
};