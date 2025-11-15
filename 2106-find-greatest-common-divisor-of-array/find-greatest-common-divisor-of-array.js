/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
     let num = nums.sort((a,b)=>a-b)
    let num1 = num[0]
    let num2 = num[num.length-1]
    let gcd = (x,y)=> y === 0 ? x : gcd(y,x%y);
    let g = gcd(num1,num2)
    return g;
};