/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
   let lengthCount = 0;
   for (let i = s.length - 1; i >= 0; i--) {
      let char = s.charAt(i); 
      if (isNotSpace(char)) { 
          lengthCount += 1 
          continue;
      };
       
      if (!isNotSpace(char) && lengthCount > 0) return lengthCount;
   } 
   
   return lengthCount;
};
    
const isNotSpace = (char) => {
    let emptySpace = " "; 
    return emptySpace !== char;
}
