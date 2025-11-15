/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
     let num = nums.sort((a,b)=>a-b);
    let gcd = (x,y)=> y === 0 ? x : gcd(y,x%y);
    let g = gcd(num[0],num[num.length-1]);
    return g;
};