/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
    if (needle === "") return 0;
    if (haystack.length < needle.length) return - 1;
    let needleLength = needle.length;
    
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let subHayStack = haystack.substring(i, i + needleLength);
        if (subHayStack === needle) return i;
    } 
    
    return -1;
};