/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
   if (s.length !== t.length) return false; 
   let map = new Map(); 
   let reversedMap = new Map();
   for (let i = 0; i < s.length; i++) {
       let charS = s.charAt(i);
       let charT = t.charAt(i);
       
       if (!map.has(charS)) {
           map.set(charS, charT);
       } else {
         if (map.get(charS) !== charT) return false;
       }
       
       if (!reversedMap.has(charT)) {
           reversedMap.set(charT, charS);
       } else {
           if (reversedMap.get(charT) !== charS) return false; 
       }
       
   } 
    
   return true;
};

