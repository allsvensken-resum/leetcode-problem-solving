/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
   let n = nums.length; 
   let sortedNums = nums.sort((a, b) => a - b);
   for (let i = 0; i < n; i++) {
       if (i !== sortedNums[i]) return i;
   }
    
   return n;
};

