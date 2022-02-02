/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
   //The lastest opening parenthesis is the first close.
   let stack = [];
   for (let i = 0; i < s.length; i++) {
       let eachParen = s.charAt(i);
       
       if (!isOpenParen(eachParen)) {
           if (stack.length === 0) return false;
           let lastestOpen = stack.pop();
           let currentPair = getPair(eachParen);
           if (lastestOpen !== currentPair) return false;
           continue;
       } 
       
       stack.push(eachParen);
     
   } 
    
   return stack.length === 0;
};

const isOpenParen = (paren) => {
   return paren === "(" || paren === "{" || paren === "[";
}

const getPair = (closedParen) => {
   let correctPair = {
       ")" : "(",
       "}" : "{",
       "]" : "[",
   } 
    
   return correctPair[closedParen];
}


