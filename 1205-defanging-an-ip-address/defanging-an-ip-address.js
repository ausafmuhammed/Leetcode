/**
 * @param {string} address
 * @return {string}
 */

var defangIPaddr = function (address) {
   let out = [];
    for (let c of address) {
        if (c === ".") out.push("[.]");
        else out.push(c);
    }
    return out.join('');
};