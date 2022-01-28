/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    let numberMap = createPairSumMap(nums, target);
    
    for (let idx = 0; idx < nums.length; idx++) {
        let num = nums[idx];
        if (numberMap.has(num)) {
            let pairArray = numberMap.get(num);
            if (pairArray.length === 2) return pairArray;
            let pairIdx = pairArray[0];
            if (pairIdx === idx) continue;
            return idx < pairIdx ? [idx, pairIdx] : [pairIdx, idx];
        }
    }  
};

/*
    3 -> [3],
    4 -> [2],
    2 -> [4]
*/

const createPairSumMap = (nums, target) => {
   let numberMap = new Map();
   
   for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let itsPair = target - num;
       
        if (!numberMap.has(itsPair)) {
            numberMap.set(itsPair, [i]); 
        } else {
            let pairArray = numberMap.get(itsPair);
            if (pairArray.length === 2) continue;
            pairArray.push(i);
        }
   }
    
   return numberMap; 
}

