/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    let cleanedString = cleanString(s);
    let start = 0;
    let end = cleanedString.length - 1;
    while (start < end) {
        if (cleanedString.charAt(start) !== cleanedString.charAt(end)) return false;
        start += 1
        end -= 1
    }
    
    return true;
};

const cleanString = (s) => {
    const regex = /[a-zA-Z0-9]+/g
    let matching = [...s.matchAll(regex)].map(f => f[0].toLowerCase());
    return matching.join("");
}