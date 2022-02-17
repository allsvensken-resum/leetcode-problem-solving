/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
   if (s.length !== t.length) return false;
   let countS = new Map();
   let countT = new Map();
   for (let i = 0; i < s.length; i++) {
       let charS = s.charAt(i);
       let charT = t.charAt(i);
       countCharWithMap(countS, charS);
       countCharWithMap(countT, charT);
   }
   
   for (let [charS, count] of countS) {
       if (!countT.has(charS)) return false;
       if (countT.get(charS) !== count) return false;
   }
    
   return true;
};

const countCharWithMap = (map, char) => {
   if (!map.has(char)) {
       map.set(char, 1);
       return;
   }
    
   map.set(char, map.get(char) + 1);
}