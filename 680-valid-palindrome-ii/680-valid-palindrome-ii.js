/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s.charAt(left) === s.charAt(right)) {
            left += 1;
            right -= 1;
            continue;
        }
        
        if (isValidPalinDrome(s, left + 1, right)) return true;
        if (isValidPalinDrome(s, left, right - 1)) return true;
        return false;
    }
    return true; 
};

const isValidPalinDrome = (s, start, end) => {
   let left = start;
   let right = end; 
   while (left < right) {
      if (s.charAt(left) !== s.charAt(right)) return false;
      left += 1;
      right -= 1;
   }
    
   return true;
}