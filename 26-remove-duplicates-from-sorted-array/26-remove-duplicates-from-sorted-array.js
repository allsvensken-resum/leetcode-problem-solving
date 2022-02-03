/**
 * @param {number[]} nums
 * @return {number}
 */

const REPLACER_NUMBER = 101;

const removeDuplicates = function(nums) {
    let replacedCount = 0;
    let prevIdx = 0;
    let currIdx = 1;
    while (currIdx <= nums.length - 1) {
       let prevVal = nums[prevIdx];
       let currVal = nums[currIdx]
       
       if (currVal === prevVal) {
           nums[currIdx] = REPLACER_NUMBER
           currIdx += 1;
           replacedCount += 1;
           continue;
       }
        
        prevIdx = currIdx
        currIdx += 1
    }
    
    nums = nums.sort((a, b) => a - b)
    
    return nums.length - replacedCount;
};