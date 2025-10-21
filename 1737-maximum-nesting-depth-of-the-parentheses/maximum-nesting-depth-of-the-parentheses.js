/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
      let count = 0;
    let maxcount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            count++;
            maxcount = Math.max(maxcount,count);
        }else if ( s[i] === ')'){
            count--;
        }
    }
    return maxcount;
};