/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
   let sortedNums = nums.sort((a, b) => a - b); 
   for (let i = 1; i < sortedNums.length; i++) {
        let prev = sortedNums[i - 1];
        let curr = sortedNums[i];
        if (prev === curr) return true;
   }
    
   return false; 
};