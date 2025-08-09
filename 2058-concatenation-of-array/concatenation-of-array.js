/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans =[nums];
    for(let i of nums){
        ans.push(i);
    }
    return ans.flat();
};