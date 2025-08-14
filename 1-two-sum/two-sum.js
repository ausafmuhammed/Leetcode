/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(num, trgt) {
   let result = [];
  for (let i = 0; i < num.length; i++){
    for (let j = i + 1; j < num.length; j++){
       if (num[i] + num[j] === trgt){
        result[0] = i;
        result[1] = j;
    }
  }  
}
  return result;
}  