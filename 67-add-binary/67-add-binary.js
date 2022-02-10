/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */



const addBinary = function(a, b) {
    let result = "";
    let [short, long] = findShortAndLong(a, b);
    let lengthDiff = long.length - short.length;
    const possibleSum = getPossibleSumAndRemaining();
    let remaining = 0;
    for (let i = long.length - 1; i >= 0; i--) {
        let shortIdx = i - lengthDiff;
        let longBit = parseInt(long.charAt(i));
        let shortBit;
        if (shortIdx < 0) {
            shortBit = 0;
        } else {
            shortBit = parseInt(short.charAt(shortIdx));
        }
        
        let sum = shortBit + longBit + remaining; 
        let [currSum, currRemain] = possibleSum.get(sum);
        remaining = currRemain;
        result = currSum + result; 
    } 
    
    if (remaining) result = remaining.toString() + result;
    return result;
};
   
const findShortAndLong = (a, b) => {
   let lengthA = a.length;
   let lengthB = b.length;
   
   return lengthA > lengthB ? [b, a] : [a, b]
}

const getPossibleSumAndRemaining = () => {
    let map = new Map();
    map.set(0, ["0", 0])
    map.set(1, ["1", 0])
    map.set(2, ["0", 1])
    map.set(3, ["1", 1])
    return map;
}

