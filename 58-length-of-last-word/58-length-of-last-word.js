/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
   let regex = /\s+/g; 
   let words = s.trim().split(regex);
   return words[words.length - 1].length;
};