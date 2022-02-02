/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    let numberString = x.toString();
    let reversedString = "";
   
    
    if (isFirstDigitMinusSign(numberString)) {
        let deletedSignString = numberString.substring(1);
        reversedString = numberString.charAt(0) + reverseString(deletedSignString);
    } else {
        reversedString = reverseString(numberString);     
    }
    
    if (!isInBoundaries(reversedString)) return 0;
   
    return reversedString;
};

const reverseString = (string) => {
   let stringLength = string.length;
   let result = [];
   let end = stringLength - 1;
   let start = 0;
    
   while (start < end) {
      result[start] = string.charAt(end);
      result[end] = string.charAt(start);
      start += 1;
      end -= 1;
   }
   
    
   if (isOddLengthString(stringLength)) {
       let middleIdx = (string.length - 1)/2; 
       result[middleIdx] = string.charAt(middleIdx);
   }
    
   return result.join("");
}

const isOddLengthString = (stringLength) => {
   return stringLength % 2 !== 0; 
}

const isFirstDigitMinusSign = (numberString) => {
   return numberString.charAt(0) === "-"; 
}

const isInBoundaries = (numberString) => {
    let number = parseInt(numberString);
    let lowerBound = Math.pow(-2, 31);
    let upperBound = Math.pow(2, 31) - 1;
    
    return number >= lowerBound && number <= upperBound;
}


