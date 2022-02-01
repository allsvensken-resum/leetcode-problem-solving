/**
 * @param {string} s
 * @return {number}
 */

let romanToNumber = {
   "I" : 1,
   "V" : 5,
   "X" : 10,
   "L" : 50,
   "C" : 100,
   "D" : 500,
   "M" : 1000,
   "IV" : 4,
   "IX" : 9,
   "XL" : 40,
   "XC" : 90,
   "CD" : 400,
   "CM" : 900
}

var romanToInt = function(s) {
    let totalAmount = 0;
    let stringLength = s.length;
    let stackChar = "";
    for (let i = 0; i < s.length; i++) {
        let currChar = s.charAt(i);
        
        if (stackChar.length === 1) {
            totalAmount += romanToNumber[stackChar + currChar];     
            stackChar = "";
            continue;
        }
        
        if (canHaveNext(currChar) && !isLastIndex(i, stringLength)) {
            let nextChar = s.charAt(i + 1);
            if (romanToNumber[currChar + nextChar]) {
                stackChar += currChar; 
                continue;
            } 
        }
        
        totalAmount += romanToNumber[currChar];
    }
    
    return totalAmount;
};

const isLastIndex = (index, stringLength) => {
   return index === stringLength - 1; 
}

const canHaveNext = (char) => {
    return char === "I" || char === "X" || char === "C";
}

