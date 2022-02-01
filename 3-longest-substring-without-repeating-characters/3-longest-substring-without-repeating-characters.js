/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let leftBound = 0;
    let rightBound = 0;
    let map = new Map();
    let max = 0;
    
    while (rightBound < s.length) {
       let currChar = s.charAt(rightBound);
        
       if (!map.has(currChar)) {
           map.set(currChar, 1);
       } else {
           let currCount = map.get(currChar);
           map.set(currChar, currCount + 1);
       
           while (map.get(currChar) > 1) {
               let leftChar = s.charAt(leftBound);
               let count = map.get(leftChar);
               map.set(leftChar, count - 1);
               leftBound += 1;
           }    
       }
     
       max = Math.max(max, rightBound - leftBound + 1);
       rightBound += 1; 
    }
    
    return max;
};



/*
    not equal - don't have => addToPrevious
    not equal - have       => addNewOne
    equal - don't have     => addNewOne (Impossible)
    equal - have           => addNewOne
*/

const getLastElemOfArray = (array) => {
   return array[array.length - 1]; 
}