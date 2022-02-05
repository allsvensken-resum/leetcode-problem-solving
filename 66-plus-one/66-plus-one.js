/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
    let stack = [1];
    let currIdx = digits.length - 1;
    while (stack.length > 0 && currIdx >= 0) {
        let remaining = stack.pop(); 
        let sum = digits[currIdx] + remaining
        if (sum < 10) {
            digits[currIdx] = sum;
            continue;
        }
        
        let [remainingDigit, sumDigit] = getDigitsArray(sum);
        stack.push(remainingDigit);
        digits[currIdx] = sumDigit
        currIdx -= 1
    }
    
    if (stack.length > 0) {
        digits.unshift(stack.pop());
    }
    
    return digits;
};

const getDigitsArray = (sum) => {
    return sum.toString().split("").map(Number);  
}






