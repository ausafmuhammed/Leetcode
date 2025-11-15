/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let n = nums[i];
        if (n < min) min = n;
        if (n > max) max = n;
    }
    while (max !== 0) {
        let temp = max;
        max = min % max;
        min = temp;
    }
    return min;
};
