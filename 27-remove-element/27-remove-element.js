/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const REPLACER_NUMBER = 51;
const removeElement = function(nums, val) {
   let replacedCount = 0;
   for (let i = 0; i < nums.length; i++) {
       if (nums[i] === val) { 
           nums[i] = REPLACER_NUMBER 
           replacedCount += 1 
       }
   } 
    
   nums = nums.sort((a, b) => a - b);
   return nums.length - replacedCount; 
};