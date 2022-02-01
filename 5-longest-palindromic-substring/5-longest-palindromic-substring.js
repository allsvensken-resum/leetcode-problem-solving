/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
    let longestPalin = "";
    for (let i = 0; i < s.length; i++) {
        const [left1, right1] = expandFromMiddle(s, i, i);
        const [left2, right2] = expandFromMiddle(s, i, i+1);    
        
        if (left1 <= right1) {
            let subString = s.substring(left1, right1 + 1);
            if (subString.length > longestPalin.length) {
                longestPalin = subString;
            }
        } 
        
        if (left2 <= right2) {
            let subString = s.substring(left2, right2 + 1);
            if (subString.length > longestPalin.length) {
                longestPalin = subString;
            }
        }
        
    } 
    
    return longestPalin;
};


const expandFromMiddle = (string, left, right) => {
   if (left < 0 || right > string.length) return 0;
   while (left >= 0 && right < string.length && string.charAt(left) === string.charAt(right)) {
       left -= 1;
       right += 1;
   } 
   
   return [left + 1, right - 1]; 
}

const isPalinDrome = (string) => {
    let left = 0;
    let right = string.length - 1;
    
    while (left < right) {
        let charLeft = string.charAt(left);
        let charRight = string.charAt(right);
        if (charLeft != charRight) return false;
        left += 1;
        right -= 1;
    }
    
    return true;
}