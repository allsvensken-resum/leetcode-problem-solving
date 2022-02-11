/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
   let visited = new Map();
   for (let i = 0; i < nums.length; i++) {
       if (visited.has(nums[i])) return true;
       visited.set(nums[i], true);
   }
    
   return false 
};