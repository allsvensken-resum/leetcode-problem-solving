/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let stringNumber = x.toString();
    let left = 0;
    let right = stringNumber.length - 1;
    
    while (left < right) {
        let leftChar = stringNumber.charAt(left);
        let rightChar = stringNumber.charAt(right);
        
        if (leftChar !== rightChar) return false;
        left += 1;
        right -= 1;
    }
    
    
    return true;
};